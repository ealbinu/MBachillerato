import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import mitt from 'mitt'
import Vue3Storage from "vue3-storage"
import { useStorage } from "vue3-storage"
import { Base64 } from 'js-base64';


import { ref, provide, watch, inject, getCurrentInstance } from 'vue'

import backgroundGenerator from './components/backgroundGenerator.js'

import 'animate.css'

const emitter = mitt()
const currentInstance = getCurrentInstance()
var app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(Vue3Storage)




gsap.registerPlugin(Draggable)

// Show all screens (test only)
app.provide('view', ref(false))

loadOdaFile()

// LOAD ODA FILE
async function loadOdaFile(){
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    
    // ODA IS IN TEST
    const istest = params.get('test')
    if(istest!=null){
        console.log('%c Test Mode! ', 'background: #222; color: #bada55');
        app.provide('test', true)
    } else {
        app.provide('test', false)
    }
    
    // LOAD ODA
    const oda = params.get('oda')
    if(oda){
        try {
            const storage = useStorage(oda+'_')
            
            const res = await axios.get('./odas/'+oda+'/oda.json')
            
            const Activity = res.data
            app.provide('activityFile', Activity)
            
            backgroundGenerator.buildBG(res.data.id)

            const startStatusFile = {
                state: '@intro',
                screen: 0,
                step: 0,
                answers: {},
                result: {}
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
            // SET TITLE
            document.title = Activity.id + ' | ' + Activity.title

        } catch (err){
            alert('Ocurrió un error al cargar la ODA')
            console.log(err)
        }
    } else {
        alert('ODA no definida')
    }
}





window.addEventListener('resize', function () {
    if(window.innerWidth<=600){
        console.log('ressszzz')
        console.log(app.config)
        app.config.globalProperties.emitter.emit('sidebarmini')
    }
})



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