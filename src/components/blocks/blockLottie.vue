<template lang="pug">
.blockLottie(ref="block").relative
    .btn.btn-circle.btn-sm.absolute.bottom-1.right-1.z-10(@click="replay"): Icon replay 
</template>
<script setup>

import {ref, inject, onMounted, watch} from 'vue'
import lottie from 'lottie-web'
import Icon from '../icon.vue';

import { useIntersectionObserver } from '@vueuse/core'



const props = defineProps({
    data: Object,
    blockid: String
})

const emit = defineEmits(['completed'])


const Activity = inject('activityFile')
const Path = inject('path')

const block = ref()
const item = ref()

const { stop } = useIntersectionObserver(
    block,
    ([{ isIntersecting }], observerElement) => {
    //console.log(isIntersecting)
    replay()
    },
)

onMounted(()=>{
    item.value = lottie.loadAnimation({
        container: block.value,
        loop: props.data.loop!= undefined ? props.data.loop : true,
        autoplay: false,
        path: Path + props.data.lottie,
    })
    
    
    item.value.addEventListener('config_ready', function () {
        //Speed
        if(props.data.speed) { item.value.setSpeed(props.data.speed) }
        //Segment
        if(props.data.segment) { item.value.playSegments(props.data.segment, true) }
        //Autoplay
        if(props.data.autoplay) { item.value.play() }

    })
    
    item.value.addEventListener('complete', function () {
        emit('completed')

    })
    item.value.addEventListener('loopComplete', function () {
        emit('completed')
    })
})


const replay = () => {
    item.value.stop()
    item.value.play()
}
defineExpose({
    replay
})

</script>
<style lang="">
    
</style>