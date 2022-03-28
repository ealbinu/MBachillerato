<template lang="pug">
section.relative.w-full.h-full
    ActivityBG
    template(v-for="(i, index) in Activity.screens" :key="index")
        OdaScreen(:screen="i" v-show="isVisibleScreen(index)" @screen-next="changeScreen" :screenindex="index")
</template>
<script setup>
import { ref, inject, computed } from 'vue'
import ActivityBG from './ActivityBG.vue';
import ActivityScreen from './ActivityScreen.vue';
import OdaScreen from './OdaScreen.vue';

const Activity = inject("activityFile")
const Status = inject("statusFile")

const props = defineProps({})
const view = inject('view')

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