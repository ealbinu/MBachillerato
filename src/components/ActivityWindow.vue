<template lang="pug">
transition(name="zoom")
    section.Activity
        template(v-for="(i, index) in Activity.screens")
            ActivityScreen(:screen="i" v-show="index==Status.screen" @screen-next="changeScreen" :screenindex="index")

</template>
<script setup>
import ActivityScreen from './ActivityScreen.vue'
import { ref, inject } from 'vue'


const Activity = inject("activityFile")
const Status = inject("statusFile")

const changeScreen = (dir) => {
    Status.value.step = 0
    Status.value.screen += dir
}


</script>
<style lang="sass">
section.Activity
    display: block
    background: rgba($clear,0.9)
    color: $main
    width: 100%
    height: 100%
    border: none
    margin-left: 2%
    @include floatcard
    box-sizing: border-box
    padding: 2% 1%
    display: flex
    flex-direction: column
    position: relative
    .container
        height: 100%
        display: flex
        flex-direction: column
        overflow-y: auto
    
</style>
