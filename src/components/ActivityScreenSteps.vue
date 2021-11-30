<template lang="pug">
.stepsNavigation
    button(@click="navigate(-1)" :disabled="modelValue==0"): span.material-icons-two-tone navigate_before
    template(v-for="(i, index) in steps")
        .step(:class="[modelValue==index?'active':'non-active']")
    button(@click="navigate(1)" :disabled="modelValue==steps-1"): span.material-icons-two-tone navigate_next
    
    
</template>
<script>
import {ref} from 'vue'
export default {
    components:{},
    props:{
        modelValue: {
            type: Number,
            default: 0,
            required: true
        },
        steps: {
            type: Number,
            required: true
        }
    },
    setup(props,context){
        const currentStep = ref(0)
        const navigate = (dir) => {
            if((dir == -1 && props.modelValue>0)  ||  (dir==1 && props.modelValue<props.steps-1) ){
                const goto = props.modelValue + dir
                context.emit('update:modelValue', goto)
            }
        }
        return {
            navigate,
            currentStep
        }
    }
}
</script>

<style lang="sass">
.stepsNavigation
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    width: 100%
    bottom:20px
    left:0
    margin: 6px 0
    .step
        width: 12px
        height: 12px
        margin: 0 2px
        border-radius: 50%
        &.active
            background: $high
        &.non-active
            background: $light
            animation: zoomAnimation .4s
        
button:not(.active)
    .material-icons-two-tone
        font-size: 30px
</style>