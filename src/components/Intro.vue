<template lang="pug">

input(type="checkbox" id="my-modal" class="modal-toggle" v-model="dialog")
.modal
    .modal-box.relative(class="w-11/12 max-w-5xl")
        //.absolute.right-2.top-2
            Icon dark_mode
            input(type="checkbox" data-act-class="darkmode" data-toggle-theme="dark,light").toggle
        .hero.relative
            .hero-content.text-center.relative.z-10
                .max-w-md.text-center
                    div.text-center: img(:src="'odas/assets/icons/'+Activity.programa+'/'+Activity.materia+'.png'").w-28.mx-auto
                    h3.text-lg {{Activity.conf.programa == 'DGETI' ? 'Bachillerato Tecnológico' : 'Bachillerato General'}}
                    h1.text-4xl.font-bold.mt-2 {{Activity.title}}
                    h2.text-xl {{Activity.conf.materia}}
                    .mt-10: button.btn(@click="close") Comenzar
                    .mt-10: MontenegroIcon(:logo="true")

            ActivityBG(:speed="3000")

</template>
<script setup>



import { ref, inject, onMounted } from 'vue'
import lottie from 'lottie-web'
import FichaTecnica from './FichaTecnica.vue'
import ActivityBG from './ActivityBG.vue';
import MontenegroIcon from './MontenegroIcon.vue';
import { themeChange } from 'theme-change'
import Icon from './icon.vue';

onMounted(()=>{
    themeChange(false)
    console.log('tjhemed')
})

const Activity = inject("activityFile")
const Status = inject("statusFile")

const emit = defineEmits(['start'])

const introContainer = ref()
const dialog = ref(true)
const close = (()=>{
    dialog.value = false
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