import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { ref, provide } from 'vue'

//import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue3'


import backgroundGenerator from './components/backgroundGenerator.js'

import 'animate.css'

var app = createApp(App)


gsap.registerPlugin(Draggable)


/*

function onMathJaxReady () {
    
}
initMathJax({
    options:{
        enableMenu: false
    }
}, onMathJaxReady)

app.use(MathJax)
*/





loadOdaFile()



// LOAD ODA FILE
async function loadOdaFile(){
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const oda = params.get('oda')
    if(oda){
        try {
            const res = await axios.get('./odas/'+oda+'/oda.json')
            app.provide('activityFile', res.data)
            backgroundGenerator.buildBG(res.data.id)
            app.mount('#app')
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