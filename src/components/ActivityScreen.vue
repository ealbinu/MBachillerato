<template lang="pug">
div.activityScreen(:style="cssVars" :class="view ? 'desplegado' : '' ")
    div.activityScreenTitle(v-if="view") {{screen.title}}
    template(v-for="(i, index) in screen.blocks")
        transition(name="slide")
            ScreenBlocks(:block="i" v-show="useSteps(index)" @step-next="stepNext" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
            
        ScreenBlockEnd(v-show="screen.end")

    ActivityScreenSteps(v-if="screen.steps && !view" :steps="screen.blocks.length")



</template>

<script setup>
import { ref, inject, computed } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ScreenBlockEnd from './ScreenBlockEnd.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'

const view = inject('view')

const props = defineProps({
    screenindex: {
        type: Number
    },
    screen: {
        type: Object,
        required: true
    }
})

const Status = inject("statusFile");

const cssVars = computed(() => {
    return {
        //'--screen-direction' : props.screen.direction || 'row',
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



</script>
<style lang="sass">
.ps
    
    height: 400px
    box-sizing: border-box
.activityScreen
    overflow-y: scroll
    overflow-x: hidden
    background: $clear
    height: 100%
    @include centerize
    @include floatcard
    padding: 1%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    padding-bottom: 40px
    &.desplegado
        display: block
        height: auto
        margin-top: 10px
        margin-bottom: 10px
        overflow-y: auto
        .activityScreenTitle
            @include centerize
            @include floatcard
            background: $high
            color: $clear
            padding: 20px 0
</style>