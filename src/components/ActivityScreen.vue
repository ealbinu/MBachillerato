<template lang="pug">

div.activityScreen(:style="cssVars")
    template(v-for="(i, index) in screen.blocks")
        transition(name="slide")
            ScreenBlocks(:block="i" v-show="useSteps(index)" @step-next="step++" @screen-next="$emit('screenNext', $event)" :blockid="screenindex+'-'+index")
    ActivityScreenSteps(v-if="screen.steps" v-model:modelValue="step" :steps="screen.blocks.length")

</template>
<script>
import { ref, inject, computed } from 'vue'
import ScreenBlocks from './ScreenBlocks.vue'
import ActivityScreenSteps from './ActivityScreenSteps.vue'
export default {
    components: {ScreenBlocks},
    props: {
        screenindex: {
            type: Number
        },
        screen: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const step = ref(0)
        const cssVars = computed(() => {
            return {
                //'--screen-direction' : props.screen.direction || 'row',
            }
        })

        const useSteps = (index) => {
            if(props.screen.steps){
                if(step.value == index){
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        }

        return {
            cssVars,
            useSteps,
            step
        }
    },
    components: { ScreenBlocks, ActivityScreenSteps }
}
</script>
<style lang="sass">
.activityScreen
    overflow-y: auto
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