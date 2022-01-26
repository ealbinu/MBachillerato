<template lang="pug">
button(@click="open" v-html="label" :class="classinit")
transition(name="zoom")
    .dialog(v-if="dialog")
        button.close(@click="close"): Icon close
        .ma-1
            slot
</template>
<script setup>
import {ref} from 'vue'
import Icon from '../icon.vue'
const props = defineProps({
    label: String,
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