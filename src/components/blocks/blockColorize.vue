<template lang="pug">
.colorize( v-if="visible"): .coloring(:style="cssVars")
</template>
<script setup>
import { data } from 'browserslist';
import {ref, computed, watch, inject} from 'vue'
import { w } from '../../../dist/assets/vendor.c9187376';
const props = defineProps({
    data: Object,
    blockid: String
})
const Audios = inject('Audios')


const visible = ref(true)
const cssVars = computed(() => {
    return {
        '--colorize-bg' : props.data.colorize || '#ffdd00',
    }
})

const destroyTimer = () => {
    if(props.data.destroy){
        Audios.schange.play()
        setTimeout(()=>{
            visible.value = false
        },1000)
    }
}
destroyTimer()

watch(
    ()=> props.data.colorize,
    ()=>{
        visible.value = true
        destroyTimer()

    }
)


</script>

<style lang="sass" scoped>
.colorize
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    overflow: hidden
    width: 100vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    mix-blend-mode: overlay
.coloring
    background: var(--colorize-bg)
    animation: growcolorize .5s forwards
    width: 20px
    height: 20px
    border-radius: 50%
    position: absolute
    z-index: -1
@keyframes growcolorize
    0%
        transform: scale(0)
    50%
        opacity: 1
    100%
        opacity: 0
        transform: scale(100)  
</style>