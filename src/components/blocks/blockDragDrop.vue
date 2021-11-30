<template lang="pug">
.blockDragDrop(:id="'block-'+blockid")
    //Droppables LEFT
    section(v-if="data.dropsLeft").drops.dropsLeft
            template(v-for="(i, index) in data.dropsLeft")
                div.drop(:data="i[1]")
                    .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                    BlockMath(v-else-if="i[0].math" :data="i[0]" )
    
    //DRAGGABLES
    section.drags
        template(v-for="(i, index) in data.drags")
            div.drag(:data="i[1]")
                .material-icons-two-tone pan_tool
                .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                BlockMath(v-else-if="i[0].math" :data="i[0]" )

    //Droppables RIGHT
    section(v-if="data.dropsRight").drops.dropsRight
            template(v-for="(i, index) in data.dropsRight")
                div.drop(:data="i[1]")
                    .content(v-if="typeof i[0] === 'string' " v-html="i[0]")
                    BlockMath(v-else-if="i[0].math" :data="i[0]" )

</template>

<script setup>
import { ref } from 'vue'
import BlockMath from './blockMath.vue'
const props = defineProps({
    blockid: String,
    data: Object
})
//const emit = defineEmits(['change', 'delete'])
const block = ref()
var dragsId = '#block-'+props.blockid
var drops = null
const createDrags = () => {
    drops = document.querySelectorAll(dragsId + ' .drop')
    Draggable.create(dragsId + ' .drag', {
        type:"x,y",
        bounds: dragsId,
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
        var drags = document.querySelector(dragsId+' .drags')
        if(drag.target.parentElement!=drags){
            drags.append(drag.target)
            TweenLite.to(drag.target, 0.2, { x: 0, y: 0 });
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
            }
        }
        if(!dropped){
            TweenLite.to(drag.target, 0.2, { x: 0, y: 0 });
            
        }
    }


setTimeout(function (){
    createDrags()
}, 1000)
</script>



<style lang="sass" scoped>
.blockDragDrop
    position: relative
    width: 100%
    min-height: 280px
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