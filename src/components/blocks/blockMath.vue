<template lang="pug">
span(:style="cssVars"): math-jax(:latex="data.math" :block="data.block" )
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
        return {
            cssVars
        }
    }
}
</script>
<style lang="sass">
.MathJax[display]
    text-align: center
    width: 100%
    font-size: 1.5rem
.MathJax
    font-size: var(--fontSize)
</style>