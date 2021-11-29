<template lang="pug">
.block(:style="cssVars")

    BlockText(v-if=" block.type==undefined || block.type=='text' " :data="block")
    BlockDragDrop(v-if=" block.type=='drag&drop' " :data="block")
    

    template(v-if="block.buttonNextStep")
        .text-center.my-1: button(@click="$emit('stepNext')") {{block.buttonNextStep}}
    
    template(v-if="block.buttonNextScreen")
        .text-center.my-2: button(@click="$emit('screenNext', 1)").important {{block.buttonNextScreen}}


</template>
<script>
import {ref, computed} from 'vue'
import BlockText from "./blocks/blockText.vue";
import ButtonNextStep from './blocks/ButtonNextStep.vue';
import BlockDragDrop from './blocks/blockDragDrop.vue';

export default {
    components: {
        BlockText,
        ButtonNextStep
    },
    props: ["block"],
    components: {
        BlockText,
        ButtonNextStep,
        BlockDragDrop
    },
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
</style>