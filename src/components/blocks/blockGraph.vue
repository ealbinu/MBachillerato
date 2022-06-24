<template lang="pug">
.blockGraphContainer(:class="['w-full min-h-[10rem] h-auto p-2 bg-white my-5 flex  justify-center', props.class]")

        div(class="relative w-6 bg-gray-100 rounded" v-if="data.tags && data.tags.left")
            div(class="-rotate-90 text-xs origin-top-left leading-5 w-auto absolute left-0 bottom-0 whitespace-nowrap"  v-html="data.tags.left")
        div(ref="blockContainer").flex-grow
        
            div(class="text-xs bg-gray-100 p-1" v-if="data.tags && data.tags.top" v-html="data.tags.top")
            .blockGraph(ref="block" :id="blockid" :class="['w-full h-40']")
            div(class="text-xs bg-gray-100 p-1" v-if="data.tags && data.tags.bottom" v-html="data.tags.bottom")

        div(class="relative w-6 bg-gray-100 " v-if="data.tags && data.tags.right")
            div(class="-rotate-90 text-xs origin-top-left leading-5 w-auto absolute left-0 bottom-0 whitespace-nowrap" v-html="data.tags.right")
</template>
<script setup>

import {ref, onMounted} from 'vue'
import JXG from 'jsxgraph'

const props = defineProps({
    data:Object,
    blockid: String
})
const block = ref()
const blockContainer = ref()
const board = ref()

onMounted(()=>{
    board.value = JXG.JSXGraph.initBoard(props.blockid, {
        ...props.data.options,
         showCopyright:false,
         showNavigation: false,
         pan: {
            enabled: true,
            needShift: false
        },
        zoom: {
            wheel: true,
            needShift: false,
            eps: 0.1,
            factorX: 1.05,
            factorY: 1.05,
        }
        })

    
    
    for(var item of props.data.create){
        board.value.create(...item)
    }

    blockContainer.value.addEventListener('wheel', (e)=>{
        e.preventDefault();
        e.stopPropagation();

        return false;
    })

    var resize = function () {
        board.value.resizeContainer(blockContainer.value.clientWidth, blockContainer.value.clientHeight, false);
        board.value.fullUpdate();
    };
    window.onresize = resize;
    resize()


 


})

</script>
<style lang="">
    
</style>