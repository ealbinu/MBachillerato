<template lang="pug">
.blockSortable(:id="'block-'+blockid" ref="block" :class="[data.class]")
    draggable(v-model="itemsModel" item-key="id" @end="storeAnswer" :sort="(Blocked || Status.finalize)?false:true")
        template(#item="{element, index}")
           div.sortable-item(:data="index+1" :class="[data.numbers?'shownumbers':'', data.classItem, 'mb-0.5']")
                .gestureIcon: Icon swipe_vertical
                BlocksRenderer(:item="element" :blockid=" blockid+'-sortableitem-'+index" :key="element")

SolveModule(@solve="solve")
</template>

<script setup>
import { ref, getCurrentInstance, inject} from 'vue'

import draggable from 'vuedraggable'

import SolveModule from '../SolveModule.vue'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'
import _ from 'lodash'




const result = ref()
const block = ref()
const Status = inject('statusFile')
const Blocked = inject('blocked')

const currentInstance = getCurrentInstance()

const props = defineProps({
    blockid: String,
    data: Object
})


const itemsModel = ref(_.shuffle(props.data.items))

const dragging = ref(false)



const builder = () => {
    if(Status.value.answers[props.blockid]){
        // If is stored
        itemsModel.value = Status.value.answers[props.blockid]
    } else {
        // Store as null
        Status.value.answers[props.blockid] = null
    }
}
builder()


const moved = () => {
    return false
}
const storeAnswer = () => {
    Status.value.answers[props.blockid] =  itemsModel.value
    console.log('dragEnd')
    
    dragging.value = true
    setTimeout(()=>{
        dragging.value = false
    }, 100)
}



const solve = () => {
    itemsModel.value = props.data.items
    storeAnswer()
}


const finalize = () => {
    if(_.isEqual(itemsModel.value, props.data.items)){
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





</script>



<style lang="sass" scoped>
.blockSortable
    &>div
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-evenly
    .sortable-item
        @include floatcard
        padding: 10px
        display: flex
        flex-direction: column
        background: #fff
        z-index: 1
        position: relative
        cursor: pointer
        color: $dark
        padding-left: 40px
        .gestureIcon
            position: absolute
            top: 0
            right: 0
        &.shownumbers
            position: relative
            &::before
                content: attr(data)
                position: absolute
                left: 1%
                background: $high
                color: $clear
                width: 18px
                height: 18px
                @include centerize
                border-radius: 50%
                font-size: 0.9rem
                box-shadow: 0 4px 8px rgba(0,0,0,0.1)
            
</style>