<template lang="pug">
.blockDragDrop(:id="'block-'+blockid" ref="block")
    //Droppables LEFT
    section(v-if="data.dropsLeft").drops.dropsLeft
            template(v-for="(i, index) in data.dropsLeft")
                div.drop(:data="i[1]")
                    .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                    BlockMath(v-else-if="i[0].math" :data="i[0]" )
    
    //DRAGGABLES
    section.drags
        template(v-for="(i, index) in data.drags")
            div.drag(:data="b64(i[1])" :data-index="index")
                .material-icons-two-tone pan_tool
                .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                BlockMath(v-else-if="i[0].math" :data="i[0]" )

    //Droppables RIGHT
    section(v-if="data.dropsRight").drops.dropsRight
            template(v-for="(i, index) in data.dropsRight")
                div.drop(:data="i[1]")
                    .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                    BlockMath(v-else-if="i[0].math" :data="i[0]" )
SolveModule(@solve="solve")
</template>

<script setup>
import { ref, getCurrentInstance, inject} from 'vue'
import BlockMath from './blockMath.vue'
import SolveModule from '../SolveModule.vue'

const Status = inject('statusFile')
const currentInstance = getCurrentInstance()

const props = defineProps({
    blockid: String,
    data: Object
})

const result = ref()
const block = ref()
var dragsId = '#block-'+props.blockid
var dragItems = dragsId + ' .drag'
var dropItems = dragsId + ' .drop'
var drops = null
var draggables
const createDrags = () => {
    drops = document.querySelectorAll(dragsId + ' .drop')
    
    draggables = Draggable.create(dragItems, {
        type:"x,y",
        bounds: dragsId,
        zIndexBoost:false,
        onDrag: function (e) { DraggableOnDrag(e, this) },
        onClick: function (e) { DraggableOnClick(e,this) },
        onDragEnd: function (e){ DraggableOnDragEnd(e,this) }
    })
}
    const DraggableOnDrag = (e, drag) => {
        for(var i = 0; i<drops.length; i++){
            if (drag.hitTest(drops[i], '40%')) {
                drag.target.classList.add('hover')
                drops[i].classList.add('hover')
                return false
            } else {
                drag.target.classList.remove('hover')
                drops[i].classList.remove('hover')
                
            }
        }

    }
    const DraggableOnClick = (e, drag) => {
        if(result.value!=null){
            return false
        }
        var drags = document.querySelector(dragsId+' .drags')
        if(drag.target.parentElement!=drags){
            drags.append(drag.target)
            TweenLite.to(drag.target, 0.2, { x: 0, y: 0 });
            storeInStatusFile()
        }
    }
    const DraggableOnDragEnd = (e, drag) => {
        var dropped = false
        for(var i = 0; i<drops.length; i++){
            if (drag.hitTest(drops[i], '40%')) {
                dropped = true
                drops[i].append(drag.target)
                TweenLite.to(drag.target, 0.2, { x: 0, y: 0 });
                drag.target.classList.remove('hover')
                drops[i].classList.remove('hover')
                
                storeInStatusFile()

            }
        }
        if(!dropped){
            TweenLite.to(drag.target, 0.2, { x: 0, y: 0 });
            
        }

    }


const b64 = (itm) => {
    var hash = btoa(itm)
    return hash
}

const storeInStatusFile = () => {
    //STORE in Status File
    var drgs = document.querySelectorAll(dragItems)
    var options = []
    for(var i=0; i<drgs.length; i++){
        var dragDataIndex = drgs[i].getAttribute('data-index')
        var dropData = drgs[i].parentElement.getAttribute('data')
        options.push([dragDataIndex, dropData])
    }
    
    Status.value.answers[props.blockid] = options
}

const initializer = setInterval(function () {
    if(Draggable){
        createDrags()
        clearInt()
    } else {
        //console.warn('Loading draggable')
    }
}, 500)

const clearInt = () => {
    //console.warn('cleaning')
    clearInterval(initializer)

    //Load stored answers
    LoadStoredAnswers()


}


const LoadStoredAnswers = () => {
    if(!Status.value.answers){
        Status.value.answers = {}
    }
    if(Status.value.answers[props.blockid]){
        var options = Status.value.answers[props.blockid]
        for(var i in options){
            var op = options[i]
            if(op[1]){
                var drag = document.querySelector(dragItems+'[data-index="'+op[0]+'"]')

                var dropzone = document.querySelector(dropItems+'[data='+op[1]+']')
                dropzone.append(drag)
            }
        }
    } else {
        Status.value.answers[props.blockid] = null
    }

    //Disable if finalized
    if(Status.value.finalize){
        finalize()
    }

}

const solve = () => {
    var drgs = document.querySelectorAll(dragItems)
    for(var i=0; i<drgs.length; i++){
        var answer = atob(drgs[i].getAttribute('data'))
        var dropzone = document.querySelector(dropItems+'[data='+answer+']')
        dropzone.append(drgs[i])

    }
    storeInStatusFile()
}


const finalize = () => {
    var drgs = document.querySelectorAll(dragItems)
    var oks = 0
    var nooks = 0
    for(var i=0; i<drgs.length; i++){
        draggables[i].disable()
        var dragData = atob(drgs[i].getAttribute('data'))
        var parentData = drgs[i].parentElement.getAttribute('data')
        if(dragData == parentData){
            drgs[i].classList.add('isok')
            oks++
        } else {
            drgs[i].classList.add('notok')
            nooks++
        }
    }
    //CORRECTA / INCORRECTA
    if(nooks == 0){
        result.value = true
    } else {
        result.value = false
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
.blockDragDrop
    position: relative
    width: 100%
    min-height: 240px
    display: flex
    justify-content: space-evenly
    .drag
        @include floatcard
        padding: 10px
        display: flex
        @include centerize
        flex-direction: column
        background: #fff
        z-index: 1
        min-height: 50px
        min-width: 50px
        position: relative
        &.hover
            border: 2px solid $high
        .material-icons-two-tone
            font-size: 12px
            margin-top: -8px
            margin-bottom: 4px
    .drop
        width: 100%
        min-height: 60px
        border: 2px dashed $light
        @include floatcard
        box-shadow: none
        @include centerize
        flex-direction: column
        padding: 2%
        .content
            background: $clear
            @include centerize
            border-radius: 7px
            padding: 2%
            font-weight: bold
        .drag
            margin: 1%
            .material-icons-two-tone
                display: none
        &.hover
            border-color: $high
    section
        display: flex
        flex-direction: column
        justify-content: space-evenly
.MathJax
    font-size: 2rem !important
</style>