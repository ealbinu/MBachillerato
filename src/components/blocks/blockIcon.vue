<template lang="pug">
.blockIcon(:style="cssVars" :class="[data.class]"): Icon {{data.icon}}
</template>
<script setup>
import {ref, computed} from 'vue'
import Icon from '../icon.vue';
const props = defineProps({
    data: Object
})

const cssVars = computed(() => {
    return {
        '--block-fontSize': props.data.size || '1rem',
        '--block-block': props.data.block? 'block' : 'inline-block'
    }
})

</script>
<style lang="sass" scoped>
.blockIcon
    display: var(--block-block)
    .material-icons
        font-size: var(--block-fontSize)
</style>