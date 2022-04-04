<template lang="pug">
.arrowtransition( v-if="arrow")
</template>
<script setup>
import { ref, inject } from 'vue'
const props = defineProps({})
const arrow = ref(true)
const Audios = inject('Audios')
Audios.schange.play()
setTimeout(() => {
    arrow.value = false
}, 1000)
</script>
<style lang="sass" scoped>
.arrowtransition
    display: block
    position: fixed
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    z-index: 999
    background-image: url(odas/assets/imgs/arrow.svg)
    background-size: 1200px
    background-repeat: no-repeat
    animation: arrownimate 1s linear
    animation-fill-mode: forwards
    //animation-iteration-count: infinite
@keyframes arrownimate
    0%
        background-position: -1000px 1000px
    70%
        opacity: 1
    100%
        opacity: 0
        background-position: 100% 100%
</style>