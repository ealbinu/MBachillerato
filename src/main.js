// Vue libs
import { createApp } from 'vue'
import { ref, provide, watch, inject, getCurrentInstance } from 'vue'
import App from './App.vue'

//External libs
import _ from 'lodash'
import axios from 'axios'
import mitt from 'mitt'
import Vue3Storage from "vue3-storage"
import { useStorage } from "vue3-storage"
import { Base64 } from 'js-base64';
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import Wad from 'web-audio-daw';
import { themeChange } from 'theme-change'
import daisyuiColors from 'daisyui/src/colors/themes'
import Popper from "vue3-popper"


//Internal libs
import backgroundGenerator from './components/backgroundGenerator.js'
import materias from './materias.js'

//Style libs
import 'animate.css'
import './index.css'



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
app.use(VueApexCharts)

app.component("Popper", Popper)

gsap.registerPlugin(Draggable)

//- Show all screens (test only)
app.provide('view', ref(false))

app.provide('hidemenu', ref(false))



//- Audios
/* sounds */
app.provide('Audios', { 
    sclick : new Wad({source : 'odas/assets/sounds/click.mp3' }),
    scancel : new Wad({source : 'odas/assets/sounds/cancel.mp3'}),
    sopen : new Wad({source : 'odas/assets/sounds/open.mp3'}),
    sclose : new Wad({source : 'odas/assets/sounds/close.mp3'}),
    schange: new Wad({source : 'odas/assets/sounds/change.mp3'}),
    sBlockSelect: new Wad({source : 'odas/assets/sounds/blockSelect.mp3'}),
    sBlockDrag: new Wad({source : 'odas/assets/sounds/blockDrag.mp3'}),
    sfinalize: new Wad({source : 'odas/assets/sounds/end.mp3'}),
    snotification: new Wad({source : 'odas/assets/sounds/notification.mp3'}),
    ssend: new Wad({source : 'odas/assets/sounds/send.mp3'}),

 })


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
    const builder = params.get('builder')



    // Materia

    

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
            Activity.conf = materias[Activity.programa][Activity.materia]

            // SET ODA primary COLOR
            const colorprincipal = Activity.conf.color
            var htmldom = document.querySelector('html')
            if(htmldom){
                htmldom.style.setProperty('--p', colorprincipal)
            }


            app.provide('activityFile', Activity)

            backgroundGenerator.buildBG(Activity.conf.color)
            
            app.provide('statusFile', statusFile)
            app.provide('builderFile', false)
                        
            app.mount('#app')

            // DATA FROM LOCALSTORAGE only on TEST
            if(istest != null){
                const getStatus = storage.getStorageSync('status')
                if(getStatus){
                    const decodeStatus = Base64.atob(getStatus)
                    if(!decodeStatus) return false
                    const parsedStatus = JSON.parse(decodeStatus)
                    if(!parsedStatus) return false
                    statusFile.value = parsedStatus
                    console.log('%c%s', consoleStyles, '::LoadedData');             
                }
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

            // SAVE DATA TO LOCALSRTORAGE (only if test)
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

            if(istest != null){
                document.title ='::TEST:: ' + Activity.id + ' | ' + Activity.title
                
                
                


            }
        } catch (err){
            //alert('Ocurrió un error al cargar la ODA')
            console.log('%c%s', consoleStyles, '::Error: '+err);
            var container = document.getElementById("app")
            container.innerHTML = '<div class="erroroda">ERROR DE CARGA</div>'
        }
    } else {
        if(builder!=null){
            app.provide('statusFile', false)
            app.provide('activityFile', false)
            app.provide('builderFile', true)
            app.mount('#app')
        } else {
           var container = document.getElementById("app")
           container.innerHTML = '<div class="erroroda">ODA NO ENCONTRADA</div>'
       }
    }
}






//Debug postMessage
const receiveMessage = (event) => {
    var dataSt = event.data
    if(typeof dataSt == 'string'){
        var dataJSON = JSON.parse(dataSt)
        //console.log('iFrameInternalMessage: ', dataJSON)
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


