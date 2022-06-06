<template lang="pug">
//template(v-if="!replaceByFeedback")
BlockReplacer(ref="replacer")
    template(v-slot:main="")
        .blockSelect(:id="'block-'+blockid" ref="block" :style="cssVars")
            template(v-for="(i, index) in data.options")
                div(@click="clicked(index, i)" :class="[ options[index] ? 'active '+ (data.optionClassActive||'') : '' , data.optionClass || 'blockSelectOption' ]")
                    template(v-if="!data.optionClass")
                        Icon touch_app
                        .option-letter {{letterop(index)}}
                    BlocksRenderer(:item="i[0]" :blockid=" blockid+'-selectitem' ")
        //-Feedback
        .feedback.text-center.animate__animated.animate__pulse(v-if="!loading" :class="'f'+(result?0:1)")
            //-Feedback General
            template(v-if="data.feedback && options.some( (e)=>{return e==true} )")
                BlocksRenderer(:item="data.feedback[result?0:1]"  :blockid=" blockid+'-selectitem-feedback'")
            //-Feedback Individual
            template(v-if="selectedItem && selectedItem[2]")
                BlocksRenderer(:item="selectedItem[2]"  :blockid=" blockid+'-selectitem-feedback'")
                
                //template(v-if="typeof data.feedback[result?0:1] == 'string'")
                    //.animate__animated.animate__swing
                    BlocksRenderer(:item="data.feedback[result?0:1]"  :blockid=" blockid+'-selectitem-feedback'")
                //template(v-else)
                    template(v-for="(iblock, indexblock) in data.feedback[result?0:1]"  :key="indexblock")
                        //.animate__animated.animate__swing
                        BlocksRenderer(:item="iblock" :blockid=" blockid+'-selectitem-feedback-'+indexblock")
    template(v-slot:second="")
        BlocksRenderer(:item="{...data.replace[0], class:'f0'}" :blockid=" blockid+'-selectitem-feedback-ok'" v-if="result")
        BlocksRenderer(:item="{...data.replace[1], class:'f1'}" :blockid=" blockid+'-selectitem-feedback-wrong'" v-else)
    
SolveModule(@solve="solve")
</template>
<script setup>
import {ref, getCurrentInstance, computed, inject, onMounted} from 'vue'
import BlockMath from './blockMath.vue'
import SolveModule from '../SolveModule.vue'
import _ from 'lodash'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'
import BlockReplacer from './blockReplacer.vue'


const result = ref(undefined)
const Status = inject('statusFile')
const Blocked = inject('blocked')
const Audios = inject('Audios')

const interactionsCount = ref(0)

const replacer = ref()

const replaceByFeedback = ref(false)

const currentInstance = getCurrentInstance()

const selectedItem = ref()
const loading = ref(false)

const props = defineProps({
    blockid: String,
    data: Object
})
const block = ref()

const options = ref([])

var singleSelection = ref(true)





const isRightOrWrong = () => {
    var dataOptions = props.data.options
    var correctOptions = []
    for(var i=0; i<dataOptions.length; i++){
        correctOptions.push(dataOptions[i][1])
    }
    if(_.isEqual(correctOptions, options.value)){
        result.value = true
    } else {
        result.value = false
    }

    if(props.data.replace!=undefined){
        replacer.value.replace()
    }

}




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
        Status.value.answers = []
    }

    if(Status.value.answers[props.blockid]){
        options.value = Status.value.answers[props.blockid][0]
        selectedItem.value = Status.value.answers[props.blockid][1]

        isRightOrWrong()
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

//- Builder 
onMounted(()=>{
    builder()
})


const clicked = (index, item) => {
    if(Blocked){
        return false
    }
    if(Status.value.finalize){
        return false
    }

    

    if(props.data.blockafter!=undefined || props.data.blockafter >0){
        if(interactionsCount.value>=props.data.blockafter){
            return false
        }
    }
    interactionsCount.value +=1


    selectedItem.value = item
    
    loading.value = true
    

    Audios.sBlockSelect.play()
    if(singleSelection.value){
        for(var i  in options.value){
            options.value[i] = false
        }
        options.value[index] = true
    } else {
        options.value[index] = !options.value[index]
    }

    isRightOrWrong()

    //STORE in Status File
    Status.value.answers[props.blockid] = [options.value, selectedItem.value]

    setTimeout(()=>{
        loading.value = false
    }, 50)

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
    Status.value.answers[props.blockid] = [options.value, selectedItem.value]
}







const finalize = () => {
    /*var dataOptions = props.data.options
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
    */

   isRightOrWrong()

    if(result.value){
        block.value.classList.add('isok')
    } else {
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
.feedback.f1
    border-color: $negative !important
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

</style>