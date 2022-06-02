<template lang="pug">

</template>
<script setup>
import {ref, onMounted} from 'vue'
//import BlocksRenderer from '../BlocksRenderer.vue'

const props = defineProps({
    data: Object,
})

//selector, addClass, removeClass


const selector = document.querySelector(props.data.selector)
console.log(props.data)
if(props.data.removeClass){
    selector.classList.remove(...props.data.removeClass.split(' '))
}
if(props.data.addClass){
    selector.classList.add(...props.data.addClass.split(' '))
}


</script>
<style lang="">
    
</style>