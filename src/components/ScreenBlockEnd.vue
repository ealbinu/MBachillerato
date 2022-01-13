<template lang="pug">
.ScreenBlockEnd.text-center
    button.important(@click="finalize") Finalizar actividad
    hr
    div {{Status}}
</template>
<script setup>
import {ref, getCurrentInstance, inject} from 'vue'



const Status = inject("statusFile")
const currentInstance = getCurrentInstance()
const props = defineProps({})



const finalize = () => {
    console.log('ENDING!')
    currentInstance.appContext.config.globalProperties.emitter.emit('finalize')
}
</script>