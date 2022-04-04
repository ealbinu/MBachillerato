<template lang="pug">
template(v-if="istest")
    button.solveModule.test(@click="solve") Resolver

</template>
<script setup>
import {ref, inject} from 'vue'
const istest = inject('test')
const props = defineProps({})
const emit = defineEmits()
const solve = () => {
    emit('solve')
}
</script>

<style lang="sass">
button.solveModule
    color: $test
    display: block
    margin: 40px auto
</style>