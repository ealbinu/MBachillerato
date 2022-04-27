<template lang="pug">

.montenegroIcon(:duration="{enter:1000, leave: 3000}" appear :class="logo?'logo':'icon'")
    img(src="/assets/icons/Montenegro-icon.svg" v-if="!logo")
    img(src="/assets/icons/Montenegro.svg" v-else)


//.lottie.montenegroicon(:data-animation-path="'assets/icons/micon.json'" data-anim-loop="true" data-name="montenegroicon")

</template>
<script setup>
import {ref} from 'vue'
import lottie from 'lottie-web'
const props = defineProps({
    logo: {
        type: Boolean,
        default: false
    }
})
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

    height: 32px
    position: relative
    text-align: center
    &.logo
        width: 100%
    &.icon
        width: 32px
    img
        height: 32px
        position: absolute
        max-width: 100%
</style>