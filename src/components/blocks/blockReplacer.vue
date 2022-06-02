<template lang="pug">
slot(name="main" v-if="!isrep")
slot(name="second" v-else)
</template>
<script setup>
import {ref} from 'vue'
const isrep = ref(false)
const replace = () => {
    isrep.value = true
} 
defineExpose({
    replace
})
</script>
<style lang="">
    
</style>
