<template lang="pug">

.block(:style="cssVars" v-if="block.content.length")
    //::::::::::::::: BLOCKS
    .blockContainer
            BlocksRenderer( v-for="(i, index) in block.content" :item="i" :blockid="blockid+'-'+index" :key="index")

    //::::::::::::::: NAV BUTTONS
    template(v-if="!view")
        .text-center.my-2

            template(v-if="block.buttonNextStep")
                button(@click="$emit('stepNext')") {{block.buttonNextStep}}
            template(v-if="block.buttonNextScreen")
                button(@click="$emit('screenNext', 1)").important {{block.buttonNextScreen}}


</template>
<script setup>
import {ref, computed, inject} from 'vue'


import BlocksRenderer from './BlocksRenderer.vue';


const view = inject('view')
const props = defineProps({
    "block": Object,
    "blockid": String
})

const cssVars = computed(() => {
    return {
        '--block-width' : props.block.width || '100%'
    }
})
       
</script>
<style lang="sass">

.block
    margin: 1% auto
    width: var(--block-width)
    box-sizing: border-box
    padding-bottom: 40px
    .blockContainer
        font-size: 1.1rem
        text-align: center
        padding: 1%
        background: #fff
        @include floatcardsmall
</style>