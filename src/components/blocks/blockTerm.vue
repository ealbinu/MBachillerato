<template lang="pug">
Popper(:class="data.class" :placement="data.placement" :arrow="true" :id="data.id")
    span.relative.mr-2
        BlocksRenderer(:item="data.term")
        Icon.termIcon.animate__animated.animate__flash.animate__infinite.animate__slow.absolute.top-0(class="-right-3").text-xs contact_support
    template(#content)
        div(class="min-w-[10rem] text-xs")
            template(v-for="(i, index) in data.content"  :key="index")
                BlocksRenderer(:item="i")

</template>
<script setup>
import {ref} from 'vue'
import Icon from '../icon.vue';
import BlockImg from './blockImg.vue';
import BlockMath from './blockMath.vue'
import BlocksRenderer from '../BlocksRenderer.vue';

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


.termIcon
    cursor: pointer
    opacity: 0.8

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