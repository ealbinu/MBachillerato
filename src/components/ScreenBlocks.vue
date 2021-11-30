<template lang="pug">
.block(:style="cssVars")

    //::::::::::::::: BLOCKS
    .blockContainer
        template(v-for="(i, index) in block.content")
            // Simple text
            span(v-if="typeof i === 'string' " v-html="i" )
            // Math jax
            BlockMath(v-else-if="i.math" :data="i")
            //Drag & drop
            BlockDragDrop(v-if="i.dragdrop" :data="i")


    //::::::::::::::: NAV BUTTONS
    template(v-if="block.buttonNextStep")
        .text-center.my-1: button(@click="$emit('stepNext')") {{block.buttonNextStep}}
    template(v-if="block.buttonNextScreen")
        .text-center.my-2: button(@click="$emit('screenNext', 1)").important {{block.buttonNextScreen}}


</template>
<script>
import {ref, computed} from 'vue'

import BlockMath from './blocks/blockMath.vue';
import BlockDragDrop from './blocks/blockDragDrop.vue';

export default {
    components: {
        BlockMath,
        BlockDragDrop
    },
    props: ["block"],
    setup(props, context){

        const cssVars = computed(() => {
            return {
                '--block-width' : props.block.width || '100%'
            }
        })
        return {
            cssVars
        }
    }
}
</script>
<style lang="sass">

.block
    margin: 1%
    width: var(--block-width)
    .blockContainer
        text-align: center
        padding: 1%
        background: #fff
        @include floatcardsmall
        &>div
            margin: 10px
</style>