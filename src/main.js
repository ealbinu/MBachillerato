import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import mitt from 'mitt'
import Vue3Storage from "vue3-storage"
import { useStorage } from "vue3-storage"
import { Base64 } from 'js-base64';
import _ from 'lodash'

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

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// LOAD ODA FILE
async function loadOdaFile(){
    
    //PARAMS
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const istest = params.get('test')
    const isblocked = params.get('blocked')
    const oda = params.get('oda')
    const dataStatus = params.get('status')


    // ODA IS IN TEST
    if(istest!=null){
        console.log('%c%s', consoleStyles, '::TestMode');
        app.provide('test', true)
    } else {
        app.provide('test', false)
    }

    // ODA IS BLOCKED
    
    if(isblocked!=null){
        console.log('%c%s', consoleStyles, '::BLOCKED');
        app.provide('blocked', true)
    } else {
        app.provide('blocked', false)
    }
    


    const startStatusFile = {
        state: '@intro',
        screen: 0,
        step: 0,
        answers: {},
        result: {},
        finalize: false
    }

    const statusFile = ref(startStatusFile)

    const resultsFile = ref({
        total: 0,
        oks: 0,
        errors: 0,
        oksPercentage: 0,
        errorsPercentage: 0
    })
    app.provide('resultsFile', resultsFile)


   

    // LOAD ODA
    
    if(oda){
        try {
            const storage = useStorage(oda+'_')
            
            const res = await axios.get('./odas/'+oda+'/oda.json')
            
            const Activity = res.data
            app.provide('activityFile', Activity)
            
            backgroundGenerator.buildBG(res.data.id)

            
            app.provide('statusFile', statusFile)

            
            
            app.mount('#app')

            // DATA FROM LOCALSTORAGE
            const getStatus = storage.getStorageSync('status')
            if(getStatus){
                const decodeStatus = Base64.atob(getStatus)
                if(!decodeStatus) return false
                const parsedStatus = JSON.parse(decodeStatus)
                if(!parsedStatus) return false
                statusFile.value = parsedStatus
                console.log('%c%s', consoleStyles, '::LoadedData');             
            }

            // DATA PASSED FROM URL            
            if(dataStatus!=null && dataStatus.length>4){
                const decodeStatus = Base64.atob(dataStatus)
                if(!decodeStatus) return false
                if(IsJsonString(decodeStatus)){
                    const parsedStatus = JSON.parse(decodeStatus)
                    if(!parsedStatus) return false
                    statusFile.value = parsedStatus
                    console.log('%c%s', consoleStyles, '::UrlData');
                    
                } else {
                    console.log('%c%s', consoleStyles, '::WRONG UrlData');
                }

            }


            const saveDataToStorage = _.throttle(function (actual, prev) {
                const enc =  Base64.btoa(JSON.stringify(actual.value))
                storage.setStorageSync('status', enc)
                const endData = {
                    status: enc,
                    results: statusFile.value.finalize? resultsFile.value : null
                }
                var endDataString = JSON.stringify(endData)
                window.top.postMessage(endDataString, "*")


            }, 2000)

            
            watch(
                () => statusFile,
                (actual, prev) => {
                    if(isblocked!=null){
                        return false
                    }
                    saveDataToStorage(actual, prev)
                    
                },
                { deep: true }
              )
            // SET TITLE
            document.title = Activity.id + ' | ' + Activity.title
            if(istest){
                document.title ='::TEST:: ' + Activity.id + ' | ' + Activity.title

            }
        } catch (err){
            //alert('Ocurrió un error al cargar la ODA')
            console.log('%c%s', consoleStyles, '::Error: '+err);
            var container = document.getElementById("app")
            container.innerHTML = '<div class="erroroda">ERROR DE CARGA</div>'
        }
    } else {
        var container = document.getElementById("app")
        container.innerHTML = '<div class="erroroda">ODA NO ENCONTRADA</div>'
    }
}






//Debug postMessage
const receiveMessage = (event) => {
    var dataSt = event.data
    if(typeof dataSt == 'string'){
        var dataJSON = JSON.parse(dataSt)
        console.log('iFrameInternalMessage: ', dataJSON)
    }
}
window.addEventListener('message', receiveMessage, false)



//Resize window event
window.addEventListener('resize', function () {
    if(window.innerWidth<=600){
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