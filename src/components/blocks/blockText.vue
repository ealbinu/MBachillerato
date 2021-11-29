<template lang="pug">
.blockText(:style="cssVars")
    template(v-for="(i, index) in data.content")
        span(v-html="i"  v-if="typeof i === 'string' ")
        math-jax(:latex="i.math" :block="i.block" v-else-if="i.math")
</template>
<script>
import {ref, computed} from 'vue'

export default {
    components:{  },
    props:['data'],
    setup(props,context){
        const cssVars = computed(() => {
            return {
                '--block-align' : props.data.align || 'center'
            }
        })

        return {
            cssVars,
            formula: '\\frac{x}{b}'
        }
    }
}
</script>

<style lang="sass">
.blockText
    text-align: var(--block-align)
    padding: 1%
    background: #fff
    @include floatcardsmall
    &>div
        margin: 10px
    .MathJax[display]
        text-align: center
        width: 100%
        font-size: 1.5rem
</style>