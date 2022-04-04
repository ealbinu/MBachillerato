<template lang="pug">
.blockInstruction(
    :style="[cssVars, data.style]"
    :class="[data.class]"
    ).animate__animated.animate__bounce.animate__delay-3s
        Icon.animate__animated.animate__flash.animate__slower.animate__infinite.text-md {{data.iconinst}}
        BlocksRenderer(:item="data.inst" :blockid="blockid+'-instruction'")
</template>
<script setup>
import {ref, computed} from 'vue'
import Icon from '../icon.vue';
import BlocksRenderer from '../BlocksRenderer.vue';

const props = defineProps({
    data: Object,
    blockid: String
})


const cssVars = computed(() => {
    return {
        '--block-align' : props.data.align || 'left',

    }
})


</script>

<style lang="sass" scoped>
.blockInstruction
    display: grid
    gap: 10px
    grid-template-columns: auto 1fr
    align-items: center
    text-align: var(--block-align)
    border: 4px solid $light
    font-size: 0.9rem
    background: rgba($clear,0.95)
    border-radius: 7px
    padding: 4px
    color:$main

</style>