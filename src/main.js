import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import mitt from 'mitt'
import Vue3Storage from "vue3-storage"
import { useStorage } from "vue3-storage"
import { Base64 } from 'js-base64';


import { ref, provide, watch, inject } from 'vue'

import backgroundGenerator from './components/backgroundGenerator.js'

import 'animate.css'


const emitter = mitt()
var app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(Vue3Storage)





gsap.registerPlugin(Draggable)



loadOdaFile()

// LOAD ODA FILE
async function loadOdaFile(){
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const oda = params.get('oda')
    if(oda){
        try {
            const storage = useStorage(oda+'_')
            
            const res = await axios.get('./odas/'+oda+'/oda.json')
            
            app.provide('activityFile', res.data)
            
            backgroundGenerator.buildBG(res.data.id)

            const startStatusFile = {
                state: '@intro',
                screen: 0,
                step: 0
            }

            const statusFile = ref(startStatusFile)
            app.provide('statusFile', statusFile)
            
            app.mount('#app')

            // DATA FROM LOCALSTORAGE
            const getStatus = storage.getStorageSync('status')
            if(getStatus){
                statusFile.value = JSON.parse(Base64.atob(getStatus))
                console.log('Saved data loaded')                
            }
            
            watch(
                () => statusFile,
                (actual, prev) => {
                    const enc =  Base64.btoa(JSON.stringify(actual.value))
                    storage.setStorageSync('status', enc)
                },
                { deep: true }
              )
            

        } catch (err){
            alert('Ocurrió un error al cargar la ODA')
            console.log(err)
        }
    } else {
        alert('ODA no definida')
    }
}




/*
async function reLoadOdaFile(){
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const oda = params.get('oda')
    if(oda){
        try {
            const res = await axios.get('./odas/'+oda+'/oda.json')
            app.provide('activityFile', res.data)
        } catch (err){
            alert('Ocurrió un error al cargar la ODA')
            console.log(err)
        }
    }
}

// HRM event
import.meta.hot.on('vite:beforeUpdate', () => {
    reLoadOdaFile()
})
*/