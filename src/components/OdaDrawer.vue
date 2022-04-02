<template lang="pug">
.menu.justify-between.rounded.w-56.overflow-y-auto.p-2.bg-white.m-1
    div.text-center: img(:src="'odas/assets/icons/'+Activity.programa+'/'+Activity.materia+'.png'").w-12.mx-auto
    div.text-center: h1.text-dark.text-lg.font-bold.mt-2.leading-5 {{Activity.title}}
    div.text-center: .text-sm {{Activity.conf.materia}}
    .flex.justify-center.my-2
        FichaTecnica
    hr.mb-1
    perfect-scrollbar.w-full
        ul.menu.bg-transparent.menu-vertical.w-full
             template(v-for="(i, index) in Activity.screens")
                li( @click="goToScreen(index)")
                    div.gap-px(:class="index == Status.screen ? 'active': ''")
                        Icon(:class="['text-sm', index == Status.screen ? 'text-white': '']")  {{i.icon}}
                        | &nbsp;{{i.title}}
    hr.mt-auto
    Progreso
    Puntaje
    hr.my-2
    MontenegroIcon.mx-auto.my-2


</template>
<script setup>
import {ref, inject, computed} from 'vue'
import FichaTecnica from './FichaTecnica.vue';
import Icon from './icon.vue';
import Progreso from './Progreso.vue';
import Puntaje from './Puntaje.vue';
import MontenegroIcon from './MontenegroIcon.vue';
const props = defineProps({})
const Blocked = inject('blocked')
const Activity = inject('activityFile')
const Status = inject('statusFile')

const goToScreen = (index) => {
    Status.value.step = 0
    Status.value.screen = index
}

</script>