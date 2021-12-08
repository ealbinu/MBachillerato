<template lang="pug">

div(v-if="data.block" :style="cssVars" v-html="mjax(data.math)").blockmathCont
span(v-else :style="cssVars" v-html="mjax(data.math)").blockmathCont
    

</template>
<script setup>
import {ref, computed} from 'vue'

const props = defineProps({
    data: Object
})
const cssVars = computed(() => {
        return {
            '--fontSize' : props.data.size || '1rem',
        }
    })
const mjax = (data) => {
    const convert = window.MathJax.tex2svg(data)
    return convert.getElementsByTagName('svg')[0].outerHTML
}

</script>
<style lang="sass">
div.blockmathCont
    text-align: center
    width: 100%
    font-size: 1.5rem
    padding: 2%
span.blockmathCont
    font-size: var(--fontSize)
</style>