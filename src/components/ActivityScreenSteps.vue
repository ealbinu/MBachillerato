<template lang="pug">
.stepsNavigation
    button(@click="navigate(-1)" :disabled="Status.step==0"): span.material-icons-two-tone navigate_before
    template(v-for="(i, index) in steps")
        .step(:class="[Status.step==index?'active':'non-active']")
    button(@click="navigate(1)" :disabled="Status.step==steps-1"): span.material-icons-two-tone navigate_next
    
    
</template>
<script setup>
import {ref, inject} from 'vue'

const props = defineProps({
    steps: {
        type: Number,
        required: true
    }
})
const Status = inject("statusFile")

const currentStep = ref(0)
const navigate = (dir) => {
    
    if(
        (dir == -1 && Status.value.step>0) ||
        (dir==1 && Status.value.step<props.steps-1)
    ){
        Status.value.step += dir
    }

}
        
</script>

<style lang="sass">
.stepsNavigation
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    width: fit-content
    bottom:7px
    right:0
    margin-left: auto
    margin-right: auto
    z-index: 10
    background: $main
    border-radius: 7px 0 7px 7px
    padding: .5%
    .step
        width: 12px
        height: 12px
        margin: 0 2px
        border-radius: 50%
        &.active
            background: $high
        &.non-active
            background: $clear
            animation: zoomAnimation .4s
        
button:not(.active)
    .material-icons-two-tone
        filter: invert(100%)  sepia(94%)  hue-rotate(150deg)
        font-size: 30px
        &:hover
            filter: invert(50%)  sepia(94%)  hue-rotate(150deg)

</style>