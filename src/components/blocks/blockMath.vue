<template lang="pug">

div(v-if="data.block" :style="cssVars" v-html="mjax(data.math)").blockmathCont
span(v-else :style="cssVars" v-html="mjax(data.math)").blockmathCont
    

</template>
<script>
import {ref, computed} from 'vue'
export default {
    components:{},
    props:['data'],
    setup(props,context){
        const cssVars = computed(() => {
                return {
                    '--fontSize' : props.data.size || '1rem',
                }
            })
        const mjax = (data) => {
            const convert = window.MathJax.tex2svg(data)
            console.log(convert)
            return convert.getElementsByTagName('svg')[0].outerHTML
        }
        return {
            cssVars,
            mjax
        }
    }
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