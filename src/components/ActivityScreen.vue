<template lang="pug">
div.activityScreen(:style="cssVars" :class="view ? 'desplegado' : '' ")
    div.activityScreenTitle(v-if="view") {{screen.title}}
    perfect-scrollbar(ref="scroll")
        template(v-for="(i, index) in screen.blocks" v-if="!screen.end")
            Transition(name="slide" mode="out-in" appear)
                ScreenBlocks(:islast="screen.blocks.length-1 == index" :block="i" v-show="useSteps(index)" @step-next="stepNext" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
        template(v-else)
            ScreenBlockEnd(v-show="screen.end")

    ActivityScreenSteps(v-if="screen.steps && !view" :steps="screen.blocks.length")



</template>

<script setup>
import { ref, inject, computed, watch } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ScreenBlockEnd from './ScreenBlockEnd.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'
const Activity = inject("activityFile")
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
    if(scroll.value.$el.scrollTop>0){
        scroll.value.$el.scrollTop = 0
    }
})



</script>
<style lang="sass" scoped>
.ps
    width: 100%
    max-height: 100%
    box-sizing: border-box
    
.activityScreen
    background: transparent
    height: 100%
    @include centerize
    @include floatcard
    padding: 1%
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    padding-bottom: 40px
    position: relative
    z-index: 1
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