<template lang="pug">
.FichaTecnica
    BlockSimpleDialog(label="Ficha Técnica")
        .h2 Ficha Técnica
        template(v-for="(i, index) in Activity.ficha")
            .grid
                div.text-bold {{i[0]}}:
                div {{i[1]}}
</template>
<script setup>
import {ref, inject} from 'vue'
import BlockSimpleDialog from './blocks/blockSimpleDialog.vue';
const props = defineProps({})
const Activity = inject('activityFile')
</script>

<style lang="sass" scoped>
.grid
    max-width: 600px
    text-align: left
    display: grid
    grid-template-columns: 1fr 2fr
    padding: 4px 10px
    &:nth-child(odd)
        background: rgba(0,0,0,0.03)
</style>