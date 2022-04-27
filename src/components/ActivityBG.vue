<template lang="pug">
.activitybgcontainer
    template(v-for="(i, index) in Activity.bgimgs")
        Transition(name="fadebg" mode="out-in")
            .ActBG(v-if="counter == (index+1)")
                .ActivityBG(:style=" 'background-image:url(odas/'+Activity.id+'/bg/'+'bg'+(index+1)+'.jpg' + ')'  ")

</template>
<script setup>
import { ref, inject, computed } from 'vue'
const props = defineProps({
    speed: Number
})
const Activity = inject("activityFile")

const speedshow = props.speed?props.speed : 6000

const counter = ref(1)

setInterval(() => {
    if(counter.value < Activity.bgimgs){
        counter.value++
    } else {
        counter.value = 1
    }
}, speedshow)



</script>
<style lang="sass" scoped>
.activitybgcontainer
    position: fixed
    z-index: -1
    width: 100%
    height: 100%
.ActBG
    position: absolute
    z-index: 0
    width: 100%
    height: 100%
    .ActivityBG
        position: absolute
        z-index: 0
        width: 100%
        height: 100%
        overflow: hidden
        opacity: 0.05
        @include floatcard
        -webkit-mask-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
        mask-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
        background-size: cover
        background-position: center
        img
            width: 100%
</style>