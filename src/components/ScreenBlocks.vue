<template lang="pug">

.block(:style="cssVars" v-if="block.content.length")
    //::::::::::::::: BLOCKS
    .blockContainer
        BlocksRenderer( v-for="(i, index) in block.content" :item="i" :blockid="blockid+'-'+index" :key="index")

    //::::::::::::::: NAV BUTTONS
    template(v-if="!view")
        .text-center.my-2

            template(v-if="evaluationsInScreen.length > 0 && allAnswered")
                template(v-if="islast")
                    button(@click="$emit('screenNext', 1)").important Continuar
                template(v-else)
                    button(@click="$emit('stepNext')").animate__animated.animate__tada Siguiente
            
            template(v-if="block.buttonNextStep")
                button(@click="$emit('stepNext')") {{block.buttonNextStep}}
            template(v-if="block.buttonNextScreen")
                button(@click="$emit('screenNext', 1)").important {{block.buttonNextScreen}}


</template>
<script setup>
import {ref, computed, inject, watch} from 'vue'


import BlocksRenderer from './BlocksRenderer.vue';

const evaluationsInScreen = ref([])
const allAnswered = ref(false)

const Status = inject('statusFile')


const view = inject('view')
const props = defineProps({
    "block": Object,
    "blockid": String,
    "islast": Boolean
})

const cssVars = computed(() => {
    return {
        '--block-width' : props.block.width || '100%'
    }
})


const thisBlockIds = props.blockid.split('-')
const getEvaluationsInScreen = () => {
    for(var i in Object.keys(Status.value.answers) ){
        var key = Object.keys(Status.value.answers)[i]
        const thisIds = key.split('-')
        if(thisIds[0]==thisBlockIds[0] && thisIds[1]==thisBlockIds[1]){
            evaluationsInScreen.value.push(Object.keys(Status.value.answers)[i])
        }
    }

}
setTimeout(() => {
    getEvaluationsInScreen()
}, 1000)



watch(Status.value.answers, (value) => {
    findAnswereds()
}, { deep: true })



const findAnswereds = () => {
    let areanswered = true
    for(var i in evaluationsInScreen.value){
        if(Status.value.answers[evaluationsInScreen.value[i]] == null){
            areanswered = false
        }
    }
    allAnswered.value = areanswered
}

setTimeout(function () {
    findAnswereds()
}, 1000)
       
</script>
<style lang="sass">

.block
    margin: 1% auto
    width: var(--block-width)
    box-sizing: border-box
    padding-bottom: 40px
    position: relative
    .blockContainer
        font-size: 1.1rem
        padding: 1%
        color: $clear
        line-height: 1.4
</style>