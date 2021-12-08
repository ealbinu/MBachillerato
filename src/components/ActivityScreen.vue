<template lang="pug">

div.activityScreen(:style="cssVars")
    template(v-for="(i, index) in screen.blocks")
        transition(name="slide")
            
            ScreenBlocks(:block="i" v-show="useSteps(index)" @step-next="stepNext" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
    ActivityScreenSteps(v-if="screen.steps" :steps="screen.blocks.length")

</template>

<script setup>
import { ref, inject, computed } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'

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
            if(props.screen.steps){
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

</style>