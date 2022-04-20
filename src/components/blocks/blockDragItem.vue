<template lang="pug">
.dragItem(ref="block" :class="[data.class]").card.bg-base-100.text-black.rounded-md.shadow-xl
    .card-body.p-3
        Icon(class="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-300") pan_tool
        template(v-for="(i, index) in data.content")
            BlocksRenderer(:item="i" :blockid="blockid+'-dragitem-'+index")
</template>
<script setup>
import {ref, inject, onMounted, getCurrentInstance} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue';
import Icon from '../icon.vue';

const props = defineProps({
    data: Object,
    blockid: String
})
const Audios = inject('Audios')
const Status = inject('statusFile')
const Blocked = inject('blocked')
const block = ref()
const result = ref(null)
const currentInstance = getCurrentInstance()

const startParent = ref()
const dropzones = ref()

const hovering = ref(null)




const init = () => {
    if(Status.value.finalize){
        finalize()
        return false
    }
    if(Blocked){
        return false
    }

    dropzones.value = document.querySelectorAll(props.data.dropzone)

    startParent.value = block.value.parentElement

    Draggable.create(block.value, {
        type: 'x,y',
        zIndexBoost:2,
        bounds: props.data.bounds,
        onDrag: function (e) { onDrag(e, this) },
        onClick: function (e) { onClick(e,this) },
        onDragEnd: function (e){ onDragEnd(e,this) }
    })
    loadAnswers()
}

const onDrag = (e,drag) => {
    if(!startParent.value.isEqualNode(drag.target.parentElement)){
        drag.endDrag()
    }
    for(var i =0; i<dropzones.value.length; i++){
        var drop = dropzones.value[i]
        if(drag.hitTest(drop, '40%')){
            drop.classList.add(...props.data.hover.split(' '))
            hovering.value = drop
            return false
        } else {
            drop.classList.remove(...props.data.hover.split(' '))
            hovering.value = null
        }
    }
}
const onClick = (e,drag) => {
    if(startParent.value.isEqualNode(drag.target.parentElement)){
        return false
    }
    Audios.scancel.play()
    
    removeItemFromDropzone(drag.target.parentElement)
    startParent.value.append(drag.target)
    TweenLite.to(drag.target, 0.2, { x: 0, y: 0 })
    
    startDragResult()
    storeInStatusFile()
}

const startDragResult = () => {
    result.value = props.data.correctId ? false : true
}
startDragResult()

const getResult = () => {
    result.value = block.value.parentElement.matches(props.data.correctId)
}


const onDragEnd = (e,drag) => {
    //for(var i in dropzones.value){
    let dropped = false
    for(var i =0; i<dropzones.value.length; i++){
        if(hovering.value){
            TweenLite.to(drag.target, 0, { x: 0, y: 0 })
            hovering.value.classList.remove(...props.data.hover.split(' '))
            
            if(!availableItemsInDropzone(hovering.value)){                
                return false
            }
            
            hovering.value.classList.add(...props.data.dropzoneClass.split(' '))
            hovering.value.append(drag.target)

            itemsInDropzone(hovering.value)
            //hovering.value.getAttribute('data-dropzoneitems')
            //hovering.value.setAttribute('data-dropzoneitems', )
            
            
            getResult()
            hovering.value = null
            Audios.sBlockDrag.play()

        }
        if(!dropped){
            TweenLite.to(drag.target, .2, { x: 0, y: 0 })
        }
    }
    storeInStatusFile()
}

const itemsInDropzone = (dropzone) => {
    
    if(!dropzone.hasAttribute('data-dropzoneitems')){
        dropzone.setAttribute('data-dropzoneitems', 1)
    } else {
        var items = parseInt(dropzone.getAttribute('data-dropzoneitems'))
        dropzone.setAttribute('data-dropzoneitems', items+1)
    }
}
const availableItemsInDropzone = (dropzone) => {
    var candrop = true
    if(dropzone.hasAttribute('data-dropzoneitems') && props.data.dropzoneItems){
        var items = parseInt(dropzone.getAttribute('data-dropzoneitems'))
        console.log('hasAttr', props.data.dropzoneItems, items)
            if(props.data.dropzoneItems <= items){
                // cannot drop
                candrop = false
            }
    }
    return candrop
}

const removeItemFromDropzone = (dropzone) => {
    var items = parseInt(dropzone.getAttribute('data-dropzoneitems'))
    dropzone.setAttribute('data-dropzoneitems', items-1)
    dropzone.classList.remove(...props.data.dropzoneClass.split(' '))
}



onMounted(()=>{
    init()

})



const finalize = () => {
    //add class
    block.value.classList.add(result.value?'isok':'notok')
    //store result
    Status.value.result[props.blockid] = result.value
}


const loadAnswers = () => {
    if(Status.value.answers[props.blockid]){
        //Loading
        const parent = Status.value.answers[props.blockid]
        document.querySelector('#'+parent).append(block.value)
        block.value.parentElement.classList.add(...props.data.dropzoneClass.split(' '))
        itemsInDropzone(block.value.parentElement)
        getResult()
        
    } else{
        //New
        Status.value.answers[props.blockid] = null
    }
    if(Status.value.finalize){
        finalize()
    }
}



const storeInStatusFile = () => {
    Status.value.answers[props.blockid] = block.value.parentElement.id
}



currentInstance.appContext.config.globalProperties.emitter.on('solve', (evt) => {
    solve()
})
currentInstance.appContext.config.globalProperties.emitter.on('finalize', (evt) => {
    finalize()
})

</script>
