<template lang="pug">
div(:title="data.d" @click="open").blockTerm
    
    span(v-html="data.t" v-if="data.t")
    BlockImg(:data="{img:data.i}" v-if="data.i")
    Icon contact_support
    .termDefinition(v-if="tooltip")
        template(v-if="typeof data.d==='string'")
            p {{data.d}}
        template(v-else)
            template(v-for="(i, index) in data.d")
                p(v-if="typeof i==='string'") {{i}}
                BlockMath(v-else-if="i.math" :data="i")
    
</template>
<script setup>
import {ref} from 'vue'
import Icon from '../icon.vue';
import BlockImg from './blockImg.vue';
import BlockMath from './blockMath.vue'

const tooltip = ref(false)

const props = defineProps({
    data: {
        type: Object
    }
})
const open = () => {
    tooltip.value = !tooltip.value
}
</script>

<style lang="sass" scoped>
.blockTerm
    display: inline
    color: $high
    font-weight: bold
    cursor: pointer
    position: relative
    .material-icons
        font-size: 14px
        vertical-align: top
    .termDefinition
        color: $dark
        font-weight: normal
        left: 50%
        bottom: 150%
        transform: translateX(-50%)
        max-width: 280px
        min-width: 140px
        position: absolute
        font-size: 0.9rem
        background: $clear
        @include floatcard
        line-height: 1
        padding: 6px
        border: 2px solid $high
        &:after
            content:""
            width: 0
            height: 0 
            position: absolute
            left: 50%
            margin-left: -8px
            top: 102%
            border-left: 8px solid transparent
            border-right: 8px solid transparent
            border-top: 8px solid $high
</style>