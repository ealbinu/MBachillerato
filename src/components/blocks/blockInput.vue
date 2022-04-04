<template lang="pug">

input(type="text" :placeholder="data.label" class="input input-bordered input-lg w-full max-w-xs text-dark" v-model="inputVariable" @change="inputed" :id="'block-'+blockid" ref="block" :class="data.class").blockInput
</template>
<script setup>
import {ref, inject, getCurrentInstance} from 'vue'
const Status = inject('statusFile')
const props = defineProps({
    blockid: String,
    data: Object
})

const currentInstance = getCurrentInstance()
const result = ref()
const Blocked = inject('blocked')
const block = ref()
const inputVariable = ref()



const inputed = () => {
    Status.value.answers[props.blockid] = inputVariable.value
}

if(Status.value.answers[props.blockid]){
    inputVariable.value = Status.value.answers[props.blockid]
} else {
    Status.value.answers[props.blockid] = null
}

const finalize = () => {
    result.value = true
    block.value.classList.add('isok')
    Status.value.result[props.blockid] = true
    console.log('finalizando variable input')
}

currentInstance.appContext.config.globalProperties.emitter.on('solve', (evt) => {
    inputVariable.value = "Nombre"
})
currentInstance.appContext.config.globalProperties.emitter.on('finalize', (evt) => {
    finalize()
})

</script>