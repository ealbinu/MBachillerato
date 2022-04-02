<template lang="pug">
section.screens(:id="'screen-'+screenindex" :style="cssVars" :class="[view ? 'desplegado' : '', 'pt-12 lg:pt-4']").m-h-screen.relative.px-2.pb-2
    //perfect-scrollbar(ref="scroll").w-full

    template(v-for="(i, index) in screen.blocks" v-if="!screen.end")
        Transition(name="slide" mode="out-in" appear)
            ScreenBlocks(:steps="screen.steps" :id="'block-'+screenindex+'-'+index" :islast="screen.blocks.length-1 == index" :block="i" v-show="useSteps(index)" @step-next="stepNext" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
    template(v-else)
        ScreenBlockEnd(v-show="screen.end")
    OdaSteps(v-if="screen.steps && !view" :steps="screen.blocks.length")
</template>
<script setup>
import { ref, inject, computed, watch } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ScreenBlockEnd from './ScreenBlockEnd.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'
import OdaSteps from './OdaSteps.vue';

const Activity = inject("activityFile")
const Status = inject("statusFile");

const view = inject('view')
const scroll = ref()
const props = defineProps({
    screenindex: {
        type: Number
    },
    screen: {
        type: Object,
        required: true
    }
})
const cssVars = computed(() => {
    return {
        '--activity-bg' : Activity.conf.color || '#ffffff',
    }
})

const stepNext = () => {
    Status.value.step++
}



const useSteps = (index) => {

    if(view.value){
        return true
    } else if(props.screen.steps){
        if(Status.value.step == index){
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}



watch(() => Status.value.step, (newVal, oldVal) => {
    var scrollElement = document.querySelector('.drawer-content')
    if(scrollElement.scrollTop>0){
        scrollElement.scrollTop = 0
    }
    /*    
    if(scroll.value.$el.scrollTop>0){
        scroll.value.$el.scrollTop = 0
    }
    */
})


</script>