<template lang="pug">
.blockDialog(:style="[data.style]")
    button(@click="open" :class="data.buttonClass").animate__animated.animate__pulse.animate__infinite.animate__slower
        template(v-for="(i, index) in data.button")
            BlocksRenderer(:item="i" :blockid="blockid+'-button-'+index")
    transition(name="zoom")
        .dialog(v-if="dialog")
            .dialog-content
                button.close(@click="close"): Icon close
                .ma-1
                    perfect-scrollbar
                        template(v-for="(i, index) in data.content")
                            BlocksRenderer(:item="i" :blockid="blockid+'-content-'+index")
</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'
const Audios = inject('Audios')
const props = defineProps({
    data: Object,
    blockid: String
})
const dialog = ref(false)
const open = () => {
    dialog.value = true
    Audios.sopen.play()
}
const close = () => {
    dialog.value = false
    Audios.sclose.play()
}
</script>
<style lang="sass" scoped>
.blockDialog
    display: inline-block
.ps
    width: 100%
    max-height: 80vh
    box-sizing: border-box
.dialog
    position: fixed
    width: 100vw
    height: 100vh
    top:0
    left: 0
    background: rgba(0,0,0,0.4)
    color: $main
    @include centerize
    z-index: 99
    .dialog-content
        background: $clear
        @include floatcard
        position: relative
        min-width: 300px
        padding: 30px 0
        max-width: 80vw
    button.close
        position: absolute
        top: 2px
        right: 2px
        border-radius: 50%
        padding: 0
        width: 30px
        height: 30px
        font-size: 0.8
        background: transparent
        .material-icons
            font-size: 20px
        &:hover
            background: $clear
p
    color: $dark !important
strong
    color: $main !important

</style>