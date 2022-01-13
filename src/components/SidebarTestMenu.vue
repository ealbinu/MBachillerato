<template lang="pug">
template(v-if="istest")
    hr
    .area.row: button(@click="solveAll").test Resolver todo
    .area.row: button(@click="viewChange").test
        template(v-if="!view") Mostrar pantallas
        template(v-else) Cerrar pantallas

</template>
<script setup>
import {ref, inject, provide, getCurrentInstance} from 'vue'

const currentInstance = getCurrentInstance()

const props = defineProps({})

const solveAll = () => {
    currentInstance.appContext.config.globalProperties.emitter.emit('solve')
}
const istest = inject('test')
const view = inject('view')

const viewChange = () => {
    view.value = !view.value
    console.log( view.value )
}

</script>

<style lang="sass">
button.test
    color: $test
</style>