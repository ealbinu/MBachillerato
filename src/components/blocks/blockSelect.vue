<template lang="pug">
.blockSelect(:id="'block-'+blockid" ref="block")
    template(v-for="(i, index) in data.options")
        div.blockSelectOption(@click="clicked(index)" :class=" options[index] ? 'active' : '' " )
            .material-icons-two-tone touch_app
            .option-letter {{letterop(index)}}
            .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
            BlockMath(v-else-if="i[0].math" :data="i[0]" )
</template>
<script setup>
import {ref} from 'vue'
import BlockMath from './blockMath.vue'

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

}
// Is single selection
const isSingleSelectionFN = () => {
    var counts = 0
    props.data.options.forEach((x)=> { if(x[1]){ counts+=1 } })
    if(counts>1){ singleSelection.value = false }
    //console.log(singleSelection.value?'SingleSelection':'Multiple')
}
builder()
// /////// Builder 


const clicked = (index) => {
    if(singleSelection.value){
        for(var i  in options.value){
            options.value[i] = false
        }
        options.value[index] = true
    } else {
        options.value[index] = !options.value[index]
    }
}

</script>

<style lang="sass">
.blockSelect
    margin: 5% 0
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    .blockSelectOption
        margin: 1% 0
        padding: 26px 2% 2% 2%
        display: flex
        flex-direction: column
        justify-content: center
        min-width: 120px
        @include floatcard
        position: relative
        cursor: pointer
        border: 2px solid $clear
        .option-letter
            position: absolute
            font-size: 12px
            top: 2px
            left: 6px
            color: $light
        .material-icons-two-tone
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
            color: #fff
            .material-icons-two-tone
                display: none
            
</style>