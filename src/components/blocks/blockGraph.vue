<template lang="pug">
.blockGraph(ref="block" :id="blockid" class="w-full min-h-[32rem]") Graph
</template>
<script setup>

import {ref, onMounted} from 'vue'
import JXG from 'jsxgraph'

const props = defineProps({
    data:Object,
    blockid: String
})
const block = ref()
const board = ref()

onMounted(()=>{
       board.value = JXG.JSXGraph.initBoard(props.blockid, {
        boundingbox: props.data.boundingbox,
        axis:(props.data.axis!=undefined?props.data.axis:true),
        grid:(props.data.grid!=undefined?props.data.grid:true),
        showNavigation: (props.data.showNavigation!=undefined?props.data.showNavigation:true),
        showCopyright:false
    })


    

 


})

</script>
<style lang="">
    
</style>