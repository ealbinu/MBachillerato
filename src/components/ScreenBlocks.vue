<template lang="pug">

.block(:style="cssVars" v-if="block.content.length")
    //::::::::::::::: BLOCKS
    .blockContainer
        template(v-for="(i, index) in block.content")
            
            // Simple text
            span(v-if="typeof i === 'string' " v-html="i")
            // Break
            br(v-else-if="i.br")
            // Block text
            div(v-else-if="i.text" v-html="i.text" :class="i.class || 'my-2'")
            // Block Term
            BlockTerm(v-else-if="i.term" :data="i")
            // Block Image
            BlockImg(v-else-if="i.img" :data="i")
            // Math jax
            BlockMath(v-else-if="i.math" :data="i")
            //Drag & drop
            BlockDragDrop(v-if="i.dragdrop" :data="i" :blockid="blockid+'-'+index")
            //Select
            BlockSelect(v-if="i.select" :data="i" :blockid="blockid+'-'+index")


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

import BlockMath from './blocks/blockMath.vue';
import BlockDragDrop from './blocks/blockDragDrop.vue';
import BlockSelect from './blocks/blockSelect.vue';
import BlockTerm from './blocks/blockTerm.vue';
import BlockImg from './blocks/blockImg.vue';


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
    margin: 1% 0
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