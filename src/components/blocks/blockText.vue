<template lang="pug">
.blockText(v-observe-visibility="{callback: visibilityChanged}" :style="cssVars" :class="[data.class]" v-html="text")
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


const timer = ref()



const text = ref(props.data.text)
//const fullTextArray = props.data.text.split('')
const fullTextArray = props.data.text.match(/.{1,10}/g)

//FIXME: Animations function throttle is being shared between all text instances
const animateText = _.throttle(function(){
    text.value = ''
    let word = 0
    timer.value = setInterval(() => {
        text.value+= fullTextArray[word]
        if(word < fullTextArray.length-1){
            word+=1
        } else {
            clearInterval(timer.value)
        }
    }, 100)
}, 4000)


const visibilityChanged = (isVisible, entry) => {
    if(props.data.animate && isVisible){
        animateText()
    }
    if(!isVisible){
        clearInterval(timer.value)
        text.value = props.data.text
    }
}


const cssVars = computed(() => {
    return {
        '--block-align' : props.data.align || 'center',
    }
})


</script>

<style lang="sass" scoped>
.blockText
    text-align: var(--block-align)
</style>