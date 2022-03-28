<template lang="pug">
.blockGroup(:style="cssVars" :class="data.class" ref="group" :data-scroll="data.scrollClass?true: undefined")
    template(v-for="(i, index) in data.content")
        BlocksRenderer(:item="i" :blockid="blockid+'-'+index")
</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue'

import ScrollOut from "scroll-out";
const props = defineProps({
    data: Object,
    blockid: String
})
const group = ref()


const cssVars = computed(() => {
    return {
        //'--block-grid-template-columns' : props.data.columns || 'auto auto auto auto'
    }
})

onMounted(()=>{
    if(props.data.scrollClass){
        const scrollClasses = props.data.scrollClass.split(' ')
        group.value.setAttribute('data-scroll-classes', scrollClasses)
        
        
            ScrollOut({
                scrollingElement: '.drawer-content',
                onShown(el) {
                    el.classList.remove(...el.getAttribute('data-scroll-classes').split(','));
                    void el.offsetWidth;
                    el.classList.add(...el.getAttribute('data-scroll-classes').split(','));
                },
                onChange: function(element, ctx, scrollingElement) {

                }
            });
    
    }
 })

</script>
<style lang="sass">
</style>