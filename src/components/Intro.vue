<template lang="pug">
transition(name="zoom" @after-leave="start")
    div.dialog.intro(v-if="dialog" ref="introContainer")
        .container.text-center
            .description.my-2
                h1.my-2 {{Activity.title}}
                p {{Activity.asignatura}}
                hr
                h4.my-1 Aprendizajes esperados
                p.mb-2 {{Activity.aprendizaje}}
                h4.my-1 Contenido central
                p.mb-2 {{Activity.contenidocentral}}
            button.important(@click="close") Comenzar
        .lottie(:data-animation-path="'odas/animations/intro_'+Activity.materia+'.json'" data-anim-loop="true" :data-name="'intro_'+Activity.materia")
</template>
<script setup>
import { ref, inject } from 'vue'
import lottie from 'lottie-web'

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

lottie.searchAnimations()
</script>

<style lang="sass">
hr
        border: none
        border-top: 1px solid rgba($main,0.1)
        margin: 10px 0
h1
    color: $high
    font-weight: bold
h4
    opacity: 0.8
    color: $dark
.description
    background: rgba(#fff,0.8)
    padding: 10px
    @include floatcard
p
    max-width: 600px
    color: $dark
    font-size: 0.8rem
.dialog.intro
    position: relative
    .container
        position: static
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