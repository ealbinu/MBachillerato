<template lang="pug">

.montenegroIcon(@click="change" mode="out-in" :duration="{enter:1000, leave: 3000}" appear)
    transition(name="zoom")
        img(src="/odas/assets/icons/Montenegro-icon.svg" v-if="mode")
        img(src="/odas/assets/icons/Montenegro.svg" v-else)


//.lottie.montenegroicon(:data-animation-path="'odas/assets/icons/micon.json'" data-anim-loop="true" data-name="montenegroicon")

</template>
<script setup>
import {ref} from 'vue'
import lottie from 'lottie-web'
const props = defineProps({})
const mode = ref(true)
//lottie.searchAnimations()
const change = () => {
    mode.value = false
    setTimeout(()=>{
        mode.value = true
    }, 2000)
}

change()
</script>

<style lang="sass" scoped>
.montenegroIcon
    display: flex
    justify-content: center
    align-items: center
    margin: 12px auto
    width: 120px
    height: 40px
    position: relative
    text-align: center
    cursor: pointer
    img
        height: 40px
        position: absolute
</style>