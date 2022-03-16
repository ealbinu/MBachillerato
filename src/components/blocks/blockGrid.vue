<template lang="pug">
.blockGrid(:style="[cssVars, data.style]")
    template(v-for="(i, index) in data.content")
        .blockGridItem: BlocksRenderer(:item="i" :blockid="blockid+'-'+index")
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
        '--block-grid-template-columns' : props.data.columns || 'auto auto auto auto',
        '--block-grid-template-columns-responsive' : props.data.columnsResponsive || 'auto',
        '--block-grid-gap' : props.data.gap || '10px'
    }
})
</script>
<style lang="sass">
.blockGrid
    display: grid
    grid-template-columns: var(--block-grid-template-columns)
    grid-gap: var(--block-grid-gap)
    align-items: center
    @media (max-width: 680px)
        grid-template-columns: var(--block-grid-template-columns-responsive)
</style>