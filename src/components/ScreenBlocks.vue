<template lang="pug">
.block(:style="cssVars")

    //::::::::::::::: BLOCKS
    .blockContainer
        template(v-for="(i, index) in block.content")
            // Simple text
            span(v-if="typeof i === 'string' " v-html="i")
            // Block text
            div(v-else-if="i.text" v-html="i.text" :class="i.class || 'my-2'")
            // Math jax
            BlockMath(v-else-if="i.math" :data="i" ref="question")
            //Drag & drop
            BlockDragDrop(v-if="i.dragdrop" :data="i" :blockid="blockid+'-'+index")
            //Select
            BlockSelect(v-if="i.select" :data="i" :blockid="blockid+'-'+index")


    //::::::::::::::: NAV BUTTONS
    template(v-if="!view")
        template(v-if="block.buttonNextStep")
            .text-center.my-1: button(@click="$emit('stepNext')") {{block.buttonNextStep}}
        template(v-if="block.buttonNextScreen")
            .text-center.my-2: button(@click="$emit('screenNext', 1)").important {{block.buttonNextScreen}}


</template>
<script setup>
import {ref, computed, inject} from 'vue'

import BlockMath from './blocks/blockMath.vue';
import BlockDragDrop from './blocks/blockDragDrop.vue';
import BlockSelect from './blocks/blockSelect.vue';

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
    .blockContainer
        text-align: center
        padding: 1%
        background: #fff
        @include floatcardsmall
</style>