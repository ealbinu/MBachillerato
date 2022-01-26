<template lang="pug">
.stepsNavigation
    button(@click="navigate(-1)" :disabled="Status.step==0")
        Icon navigate_before
        span.txt Anterior
    template(v-for="(i, index) in steps")
        .step(:class="[Status.step==index?'active':'non-active']")
    button(@click="navigate(1)" :disabled="Status.step==steps-1")
        span.txt Siguiente
        Icon navigate_next
    
</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from './icon.vue'
const emit = defineEmits()
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
        emit('stepChanged')
    }

}
</script>

<style lang="sass" scoped>
.stepsNavigation
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    width: 100%
    box-sizing: border-box
    bottom:0
    left: 0
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
    color: $clear
    margin: 0 10px
    display: flex
    align-items: center
    .material-icons-two-tone
        filter: invert(100%)  sepia(94%)  hue-rotate(150deg)
        font-size: 20px
    &:hover
        color: $main
        .material-icons-two-tone
            filter: invert(50%)  sepia(94%)  hue-rotate(150deg)
button
    span.txt
        @media (max-width: 680px)
            display: none
    &:disabled
        span.txt
            display: none
</style>