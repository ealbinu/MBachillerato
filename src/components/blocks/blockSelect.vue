<template lang="pug">
.blockSelect(:id="'block-'+blockid" ref="block" :style="cssVars")
    template(v-for="(i, index) in data.options")
        div.blockSelectOption(@click="clicked(index)" :class=" options[index] ? 'active' : '' ")
            Icon touch_app
            .option-letter {{letterop(index)}}
            BlocksRenderer(:item="i[0]" :blockid=" blockid+'-selectitem' ")
            .feedback.bg-white.text-dark.p-1.text-sm.rounded.mt-2(v-if="i[2]") {{i[2]}}


SolveModule(@solve="solve")
</template>
<script setup>
import {ref, getCurrentInstance, computed, inject} from 'vue'
import BlockMath from './blockMath.vue'
import SolveModule from '../SolveModule.vue'
import _ from 'lodash'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'


const result = ref()
const Status = inject('statusFile')
const Blocked = inject('blocked')
const Audios = inject('Audios')

const currentInstance = getCurrentInstance()

const props = defineProps({
    blockid: String,
    data: Object
})
const block = ref()

const options = ref([])

var singleSelection = ref(true)


const letterop = (index) => {
    const letters = 'abcdefghijk'
    return letters[index]
}

//Build options model
const builder = () => {
    for(var i in props.data.options){
        var opt = props.data.options
        //ALL FALSE AT START
        options.value[i] = false
    }
    isSingleSelectionFN()


    //Load stored answers
    if(!Status.value.answers){
        Status.value.answers = {}
    }

        
    if(Status.value.answers[props.blockid]){
        options.value = Status.value.answers[props.blockid]
    } else {
        Status.value.answers[props.blockid] = null
    }

    
}
//- Is single selection
const isSingleSelectionFN = () => {
    var counts = 0
    props.data.options.forEach((x)=> { if(x[1]){ counts+=1 } })
    if(counts>1){ singleSelection.value = false }
    //console.log(singleSelection.value?'SingleSelection':'Multiple')
}
builder()
//- Builder 


const clicked = (index) => {
    if(Blocked){
        return false
    }
    if(Status.value.finalize){
        return false
    }
    Audios.sBlockSelect.play()
    if(singleSelection.value){
        for(var i  in options.value){
            options.value[i] = false
        }
        options.value[index] = true
    } else {
        options.value[index] = !options.value[index]
    }


    //STORE in Status File
    Status.value.answers[props.blockid] = options.value
}



const solve = () => {
    var dataOptions = props.data.options
    for(var i=0; i<dataOptions.length; i++){
        if(dataOptions[i][1]){
            options.value[i] = true
        } else {
            options.value[i] = false
        }
    }
    //STORE in Status File
    Status.value.answers[props.blockid] = options.value
}



const finalize = () => {
    var nooks = 0
    var dataOptions = props.data.options
    var correctOptions = []
    for(var i=0; i<dataOptions.length; i++){
        correctOptions.push(dataOptions[i][1])
    }
    if(_.isEqual(correctOptions, options.value)){
        result.value = true
        block.value.classList.add('isok')
    } else {
        result.value = false
        block.value.classList.add('notok')
    }
    Status.value.result[props.blockid] = result.value
}

currentInstance.appContext.config.globalProperties.emitter.on('solve', (evt) => {
    solve()
})
currentInstance.appContext.config.globalProperties.emitter.on('finalize', (evt) => {
    finalize()
})



const cssVars = computed(() => {
    return {
        '--block-grid-template-columns' : props.data.columns || '1fr 1fr 1fr 1fr',
        '--block-grid-template-columns-responsive' : props.data.columnsResponsive || '1fr',
        '--block-grid-gap' : props.data.gap || '10px'
    }
})

</script>

<style lang="sass">
.blockSelect
    width: 100%
    margin: 5% 0
    justify-content: space-evenly
    display: grid
    grid-template-columns: var(--block-grid-template-columns)
    grid-gap: var(--block-grid-gap)
    @media (max-width: 680px)
        grid-template-columns: var(--block-grid-template-columns-responsive)
    .blockSelectOption
        margin: 1% 0
        padding: 20px 2% 2% 2%
        display: flex
        flex-direction: column
        justify-content: center
        min-width: 120px
        @include floatcard
        position: relative
        cursor: pointer
        border: 2px solid $clear
        width: 100%
        min-height: 80px
        .option-letter
            position: absolute
            font-size: 12px
            top: 2px
            left: 6px
            color: $light
        .material-icons
            position: absolute
            font-size: 12px
            top: 2px
            right: 2px
        &:hover
            box-shadow: 0 8px 12px rgba($high,0.08)
            border: 2px solid $high
            box-sizing: border-box
        &.active
            background: $high
            color: $dark
            .material-icons
                display: none
            .feedback
                display: block
.feedback
    display: none
</style>