<template lang="pug">
.blockText(
    v-observe-visibility="{callback: visibilityChanged}"
    :style="cssVars"
    :class="[ data.class]"
    v-html="text"
    ).animate__animated
</template>
<script setup>
import {ref, computed} from 'vue'
import Icon from '../icon.vue';
import BlockImg from './blockImg.vue';
import BlockMath from './blockMath.vue'
import _ from 'lodash'

const tooltip = ref(false)

const props = defineProps({
    data: Object
})


const visibilityChanged = (isVisible, entry) => {}

const text = ref(props.data.text)
//const fullTextArray = props.data.text.split('')
const fullTextArray = props.data.text.match(/.{1,10}/g)



const cssVars = computed(() => {
    return {
        '--block-align' : props.data.align || 'left',

    }
})


</script>

<style lang="sass" scoped>
.blockText
    text-align: var(--block-align)
</style>