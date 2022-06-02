<template lang="pug">

template(v-for="(state, index) in states")
    template(v-if="state && data[index]")
        BlocksRenderer(:item="data[index]" :blockid="blockid+'-'+index")
</template>
<script setup>
import {ref, onMounted} from 'vue'
//import BlocksRenderer from '../BlocksRenderer.vue'

const props = defineProps({
    states: Array,
    data: Object,
    blockid: String,
})

const states = ref({})

for(var stateName of props.states){
    states.value[stateName] = false
}

const state = (stateName) => {
    states.value[stateName] = true
    console.log(stateName, 'true')
}

defineExpose({
    state
})

</script>
<style lang="">
    
</style>