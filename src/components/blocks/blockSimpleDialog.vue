<template lang="pug">
button(@click="open" :class="classinit")
    Icon(v-if="icon") {{icon}}
    span(v-html="label" )
transition(name="zoom")
    .dialog(v-if="dialog")
        .dialog-content
            button.close(@click="close"): Icon close
            .ma-1
                slot
</template>
<script setup>
import {ref} from 'vue'
import Icon from '../icon.vue'
const props = defineProps({
    label: String,
    icon: String,
    classinit: Object
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
.dialog
    position: fixed
    width: 100vw
    height: 100vh
    top:0
    left: 0
    background: rgba(0,0,0,0.4)
    
    @include centerize
    z-index: 99
    .dialog-content
        background: $clear
        @include floatcard
        position: relative
        padding: 30px 0
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
span
    display: inline-block
    padding: 1px 4px
.theicon
    line-height: 1px
</style>