<template lang="pug">
.blockGroup(:style="cssVars" :class="data.class")
    template(v-for="(i, index) in data.content")
        BlocksRenderer(:item="i" :blockid="blockid+'-'+index")
</template>
<script setup>
import {ref, computed} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue'
const props = defineProps({
    data: Object,
    blockid: String
})
const cssVars = computed(() => {
    return {
        //'--block-grid-template-columns' : props.data.columns || 'auto auto auto auto'
    }
})
</script>
<style lang="sass">
.blockGroup
    //display: grid
    //grid-template-columns: var(--block-grid-template-columns)
</style>