<template lang="pug">
transition(name="zoom")
    aside.ActivitySidebar(:class="[wide?'':'mini']" :style="cssVars")
        .openclosebtn(@click="wide=!wide")
            Icon(v-if="wide") navigate_before
            Icon(v-else) navigate_next
        
        perfect-scrollbar.container
            div.area.text-center
                img(:src="'odas/assets/icons/'+Activity.programa+'/'+Activity.materia+'.png'").w-3
                .h4 {{Activity.title}}
                .small {{Activity.conf.materia}}
            hr
            .area.text-center: FichaTecnica

            hr
            div.area.pantallas
                ul
                    template(v-for="(i, index) in Activity.screens")
                        li(:class="index == Status.screen ? 'active': ''" @click="goToScreen(index)").screenItem
                            Icon(:class="index == Status.screen ? 'active': ''")  {{i.icon}}
                            span.label &nbsp;{{i.title}}
            hr
            
            Progreso
            Puntaje
            
            MontenegroIcon
            SidebarTestMenu
            
            //template(v-if="!Blocked")
                hr
                .area.row
                    button(@click="resetApp") Reiniciar
</template>
<script setup>
import { ref, inject, getCurrentInstance , computed} from 'vue'
import { useStorage } from "vue3-storage"
import BlockSimpleDialog from './blocks/blockSimpleDialog.vue'
import SidebarTestMenu from './SidebarTestMenu.vue'
import Icon from './icon.vue'
import Progreso from './Progreso.vue'
import Puntaje from './Puntaje.vue'
import FichaTecnica from './FichaTecnica.vue'
import MontenegroIcon from './MontenegroIcon.vue'

const Blocked = inject('blocked')

const Activity = inject('activityFile')

const Status = inject('statusFile')
const wide = ref(true)
const currentInstance = getCurrentInstance()

const goToScreen = (index) => {
    Status.value.step = 0
    Status.value.screen = index
}
const resetApp = () => {
    //console.log(Activity.id)
    const storage = useStorage(Activity.id+'_')
    storage.removeStorageSync('status')
    location.reload()
}
currentInstance.appContext.config.globalProperties.emitter.on('sidebarmini', (evt) => {
    wide.value = false
})


const cssVars = computed(() => {
    return {
        '--block-active-color': Activity.conf.color
    }
})

</script>
<style lang="sass">

aside.ActivitySidebar
    position: relative
    display: block
    background: rgba($clear,0.9)
    color: $main
    width: 26%
    max-width: 260px
    height: 100%
    border: none
    @include floatcard
    box-sizing: border-box
    padding: 2% 1%
    display: flex
    flex-direction: column
    transition: width .2s ease-out
    .container
        height: 100%
        display: flex
        flex-direction: column
        overflow-y: auto
        .ps__rail-x
            display: none !important
    .area
        &.pantallas
            flex-grow: 1
    h1
        font-size: 1.2rem
        color: $dark
        text-align: center
        span
            display: block
            font-size: 1rem
    h2
        font-size: 0.8rem
        color: $dark
        margin-bottom: 6px
    hr
        border: none
        border-top: 1px solid rgba($main,0.1)
        margin: 10px 0
    ul
        
        list-style: none
        li
            padding: 10px 5px
            font-size: 0.8rem
            &.active
                font-weight: bold
                @include floatcardsmall
                background: var(--block-active-color)
                color: $clear
    
    .instrucciones
        font-size: 0.8rem
    .openclosebtn
        position: absolute
        right: -14px
        top: 50%
        width: 20px
        height: 40px
        margin-top:-20px
        background: #fff
        display: flex
        justify-content: center
        align-items: center
        border-radius: 2px 7px 7px 2px
        cursor: pointer
        &:hover
            background: $clear
        &:active
            background: var(--block-active-color)
    //MINI SIDEBAR 
    &.mini
        width: 60px
        transition: width .2s ease-out
        text-align: center
        h1, .label, hr, .extrainfo
            display: none
            display: none
        
        
        //@media (max-width: 600px)
            position: fixed
            left: 2%
            top: 2%
            margin: 0%
            height: 96%
            z-index: 2 !important
    &:not(.mini)
        min-width: 180px
.screenItem
    cursor: pointer
    &:hover
        color: $light
</style>
