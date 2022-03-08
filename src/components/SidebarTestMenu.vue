<template lang="pug">
template(v-if="istest")
    hr
    .area.row.mb-1: button(@click="solveAll").test Resolver todo
    .area.row: button(@click="viewChange").test
        template(v-if="!view") Mostrar pantallas
        template(v-else) Cerrar pantallas
    hr
    .area.row
        button(@click="resetApp") Reiniciar
</template>
<script setup>
import {ref, inject, provide, getCurrentInstance} from 'vue'
import { useStorage } from "vue3-storage"

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

const resetApp = () => {
    //console.log(Activity.id)
    const storage = useStorage(Activity.id+'_')
    storage.removeStorageSync('status')
    location.reload()
}

</script>

<style lang="sass">
button.test
    color: $test
</style>