<template lang="pug">
button(@click="open" :class="data.buttonClass").animate__animated.animate__pulse.animate__infinite.animate__slower
    BlocksRenderer(:item="data.button" :blockid="blockid+'-button'")
transition(name="zoom")
    .dialog(v-if="dialog")
        button.close(@click="close"): Icon close
        .ma-1
            perfect-scrollbar
                template(v-for="(i, index) in data.content")
                    BlocksRenderer(:item="i" :blockid="blockid+'-content-'+index")
</template>
<script setup>
import {ref} from 'vue'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'
const props = defineProps({
    data: Object,
    blockid: String
})
const dialog = ref(false)
const open = () => {
    dialog.value = true
}
const close = () => {
    dialog.value = false
}
</script>
<style lang="sass" scoped>
.ps
    width: 100%
    max-height: 80vh
    box-sizing: border-box
.dialog
    position: fixed
    color: $dark
    font-size: 1rem
    button.close
        position: absolute
        top: 2px
        right: 2px
        border-radius: 50%
        padding: 0
        width: 30px
        height: 30px
        font-size: 0.8
        background: $high
        .material-icons-two-tone
            font-size: 20px
        &:hover
            background: $clear
p
    color: $dark !important
strong
    color: $main !important

</style>