<template lang="pug">

.block(:style="cssVars" v-if=" block.content.length" :class="[block.class]").rounded
    //-::::::::::::::: BLOCKS
    //-.blockContainer(:class="[block.class]")
    BlocksRenderer( v-for="(i, index) in block.content" :item="i" :blockid="blockid+'-'+index" :key="index")

    //::::::::::::::: NAV BUTTONS
    template(v-if="!view")
        .text-center.my-16

            // Auto
            template(v-if="steps")
                template(v-if="evaluationsInScreen.length > 0 && allAnswered")
                    template(v-if="!islast")
                        button(@click="$emit('stepNext')").btn.btn-ghost.text-white.animate__animated.animate__tada Siguiente
                    template(v-else)
                        button(@click="$emit('screenNext', 1)").btn.btn-accent.btn-wide Continuar

            //template(v-if="!steps && islast")
                button(@click="$emit('screenNext', 1)").btn.btn-accent.btn-wide Continuar

            template(v-if="block.buttonNextStep")
                button(@click="$emit('stepNext')").btn.btn-primary.text-white {{block.buttonNextStep}}
            template(v-if="block.buttonNextScreen")
                button(@click="$emit('screenNext', 1)").btn.btn-accent.btn-wide {{block.buttonNextScreen}}


</template>
<script setup>
import {ref, computed, inject, watch, onMounted} from 'vue'
import BlocksRenderer from './BlocksRenderer.vue';



const evaluationsInScreen = ref([])
const allAnswered = ref(false)

const Status = inject('statusFile')


const view = inject('view')
const props = defineProps({
    "block": Object,
    "blockid": String,
    "islast": Boolean,
    "steps": Boolean
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
    margin: 0 auto 20px auto
    width: var(--block-width)
    box-sizing: border-box
    position: relative
    max-width: 980px
    //.blockContainer
    font-size: 1.1rem
    padding: 1%
    color: $clear
    line-height: 1.4
</style>