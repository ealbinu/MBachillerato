<template lang="pug">
div.activityScreen(:style="cssVars" :class="view ? 'desplegado' : '' ")
    div.activityScreenTitle(v-if="view") {{screen.title}}
    perfect-scrollbar(ref="scroll")
        template(v-for="(i, index) in screen.blocks" v-if="!screen.end")
            transition(name="slide")
                ScreenBlocks(:block="i" v-show="useSteps(index)" @step-next="stepNext" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
        template(v-else)
            ScreenBlockEnd(v-show="screen.end")

    ActivityScreenSteps(v-if="screen.steps && !view" :steps="screen.blocks.length" @step-changed="updatedSteps")



</template>

<script setup>
import { ref, inject, computed } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ScreenBlockEnd from './ScreenBlockEnd.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'

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

const Status = inject("statusFile");

const cssVars = computed(() => {
    return {
        //'--screen-direction' : props.screen.direction || 'row',
    }
})

const stepNext = () => {
    Status.value.step++
    updatedSteps()
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

const updatedSteps = () =>{
    scroll.value.$el.scrollTop = 0
}


</script>
<style lang="sass" scoped>
.ps
    width: 100%
    max-height: 100%
    box-sizing: border-box
    
.activityScreen
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