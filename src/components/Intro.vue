<template lang="pug">
transition(name="zoom" @after-leave="start")
    div.intro(v-if="dialog" ref="introContainer").text-center
        .content
            MontenegroIcon
            .my-1: img(:src="'odas/assets/icons/'+Activity.programa+'/'+Activity.materia+'.png'").w-7
            .my-1
                .h4 {{Activity.title}}
                .small {{Activity.conf.materia}}
            .my-1: FichaTecnica
            hr
            button.important(@click="close" :style="'color:#fff; background:' + Activity.conf.color") Comenzar
            //.lottie(:data-animation-path="'odas/animations/intro_'+Activity.materia+'.json'" data-anim-loop="true" :data-name="'intro_'+Activity.materia")
        ActivityBG(:speed="3000")
</template>
<script setup>



import { ref, inject } from 'vue'
import lottie from 'lottie-web'
import FichaTecnica from './FichaTecnica.vue'
import ActivityBG from './ActivityBG.vue';
import MontenegroIcon from './MontenegroIcon.vue';
const Activity = inject("activityFile")
const Status = inject("statusFile")

const emit = defineEmits(['start'])

const introContainer = ref()
const dialog = ref(true)
const close = (()=>{
    dialog.value = false
})
const start = (() => {
    emit('start')
})

//lottie.searchAnimations()

</script>


<style lang="sass" scoped>
hr
    border: none
    border-top: 1px solid rgba($main,0.1)
    margin: 10px 0
.intro
    position: fixed
    top: 5%
    left: 10%
    justify-content: center
    align-items: center
    color: $main
    box-sizing: border-box
    display: flex
    flex-direction: column
    width: 80%
    height: 90%
    background: rgba(#fff,0.9)
    @include floatcard
    .content
        position: relative
        z-index: 1
.lottie 
    left: 0
    right: 0
    top: 0
    bottom: 0
    position: absolute
    z-index: 0
    width: 100%
    height: 100%
</style>