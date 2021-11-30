<template lang="pug">
math-jax(:latex="data.math" :block="data.block" )
</template>
<script>
import {ref} from 'vue'
export default {
    components:{},
    props:['data'],
    setup(props,context){
        return {

        }
    }
}
</script>
<style lang="sass">
.MathJax[display]
    text-align: center
    width: 100%
    font-size: 1.5rem
</style>