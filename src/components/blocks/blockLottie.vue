<template lang="pug">
.blockLottie(ref="block")
</template>
<script setup>

import {ref, inject, onMounted} from 'vue'
import lottie from 'lottie-web'
const props = defineProps({
    data: Object,
    blockid: String
})

const emit = defineEmits(['completed'])


const Activity = inject('activityFile')
const Path = inject('path')

const block = ref()
const item = ref()





onMounted(()=>{
    item.value = lottie.loadAnimation({
        container: block.value,
        loop: props.data.loop!= undefined ? props.data.loop : true,
        autoplay: props.data.autoplay!= undefined ? props.data.autoplay : true,
        path: Path + props.data.lottie,
    })
    //item.value.setSpeed(10)

    item.value.addEventListener('complete', function () {
        emit('completed')

    })
    item.value.addEventListener('loopComplete', function () {
        emit('completed')
    })
})



</script>
<style lang="">
    
</style>