<template lang="pug">
transition(name="zoom")
    section.Activity(:class="view ? 'desplegado' : '' ")
        template(v-for="(i, index) in Activity.screens")
            ActivityScreen(:screen="i" v-show="isVisibleScreen(index)" @screen-next="changeScreen" :screenindex="index")
</template>
<script setup>
import ActivityScreen from './ActivityScreen.vue'
import { ref, inject, computed } from 'vue'


const view = inject('view')
const Activity = inject("activityFile")
const Status = inject("statusFile")

const changeScreen = (dir) => {
    Status.value.step = 0
    Status.value.screen += dir
}

const isVisibleScreen = (screenIndex) => {
    if(view.value){
        return true
    } else if( screenIndex==Status.value.screen ){
        return true
    }
    return false
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
    &.desplegado
        display: block
        height: 100%
        overflow-y: scroll
</style>
