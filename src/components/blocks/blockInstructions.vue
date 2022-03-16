<template lang="pug">
.blockInstruction(
    :style="[cssVars, data.style]"
    :class="[data.class]"
    ).animate__animated.animate__bounce.animate__delay-3s
        template(v-for="(i, index) in data.content")
            BlocksRenderer(:item="i" :blockid="blockid+'-instruction-'+index")
            //BlocksRenderer(:item="i" :key="index" :blockid="blockid+'-instruction-'+index")
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
    .material-icons
        font-size: 3rem
</style>