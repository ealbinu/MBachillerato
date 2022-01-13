<template lang="pug">
button(@click="open" v-html="label")
transition(name="zoom")
    .dialog(v-if="dialog")
        button.close(@click="close"): .material-icons-two-tone close
        .ma-1
            slot
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    label: String
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
    z-index: 10
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