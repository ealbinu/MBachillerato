<template lang="pug">
template(v-if="loaded")

    div(v-if="data.block"
        :style="cssVars"
        :class="[data.dark?'dark':'light']"
        v-html="mjax(data.math)"
    ).blockmathCont.animate__animated.animate__jello.animate__delay-2s
    
    span(v-else
        :style="cssVars" 
        :class="[data.dark?'dark':'light']"
        v-html="mjax(data.math)"
    ).blockmathCont

</template>
<script setup>
import {ref, computed} from 'vue'
const loaded = ref(false)
const props = defineProps({
    data: Object
})
const cssVars = computed(() => {
        return {
            '--fontSize' : props.data.size || '1rem',
            '--fontSizeBlock' : props.data.size || '1.5rem',
        }
    })
const mjax = (data) => {
    const convert = window.MathJax.tex2svg(data)
    return convert.getElementsByTagName('svg')[0].outerHTML
}

setTimeout(()=>{
    loaded.value = true
}, 200)
</script>
<style lang="sass">
div.blockmathCont
    text-align: center
    width: 100%
    font-size: var(--fontSizeBlock)
    padding: 2% 0
    max-width: 100%
    color: $light
    background: rgba(255,255,255,0.03)
    border-radius: 4px
    margin: 2px auto
    vertical-align: middle
    svg
        max-width: 100%
        margin: 0 auto
    &.dark
        color: $main
span.blockmathCont
    font-size: var(--fontSize)
    color: $light
    padding: 4px
    border-radius: 4px
    display: inline-block
    background: rgba(255,255,255,0.03)
    max-width: 100%
    text-align: center
    vertical-align: middle
    svg
        max-width: 100%
    &.dark
        color: $main
.blockSelectOption.active .blockmathCont
    color: $main !important
</style>