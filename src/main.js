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

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'



const consoleStyles = [
    'color: #446699',
    'background: #ddff99',
    'font-size: 9px',
    'padding: 2px 5px',
    'border-radius: 4px'
  ].join(';')


const emitter = mitt()
const currentInstance = getCurrentInstance()
var app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(Vue3Storage)
app.use(PerfectScrollbar)


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
        console.log('%c%s', consoleStyles, '::TestMode');
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

            const resultsFile = ref({
                total: 0,
                oks: 0,
                errors: 0,
                oksPercentage: 0,
                errorsPercentage: 0
            })
            app.provide('resultsFile', resultsFile)
            
            app.mount('#app')

            // DATA FROM LOCALSTORAGE
            const getStatus = storage.getStorageSync('status')
            if(getStatus){
                statusFile.value = JSON.parse(Base64.atob(getStatus))
                console.log('%c%s', consoleStyles, '::LoadedData');             
            }

            // DATA PASSED FROM URL

            const dataStatus = params.get('status')
            if(dataStatus){
                statusFile.value = JSON.parse(Base64.atob(dataStatus))
                console.log('%c%s', consoleStyles, '::UrlData');
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
            if(istest){
                document.title ='::TEST:: ' + Activity.id + ' | ' + Activity.title

            }
        } catch (err){
            alert('Ocurrió un error al cargar la ODA')
            console.log('%c%s', consoleStyles, '::Error: '+err);
        }
    } else {
        var container = document.getElementById("app")
        container.innerHTML = '<div class="erroroda">ODA NO ENCONTRADA</div>'
    }
}





window.addEventListener('resize', function () {
    if(window.innerWidth<=600){
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