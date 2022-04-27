<template lang="pug">
</template>
<script setup>
//import LeaderLine from 'leader-line'
import {ref, onMounted, watch, inject} from 'vue'
const props = defineProps({
    data: Object
})

const Status = inject('statusFile')

watch(
    ()=>Status.value,
    ()=>{
        setTimeout(()=>{
            redraw()
        }, 250)
    },
    {deep: true}
)

const lines = ref([])

const redraw = () => {
    
    for(var i in lines.value){
        lines.value[i].position()
    }
    
}

onMounted(()=>{
    LeaderLine.positionByWindowResize = false
    document.querySelector('.drawer-content').addEventListener('scroll', AnimEvent.add(function() {
        redraw()
    }))
    window.addEventListener('resize', AnimEvent.add(function() {
        redraw()
    }))
    drawit()
})

const elementOrAnchor = (item) => {
    var data = false
    if(typeof item == 'string'){
        data = document.querySelector(item)
    } else {
        var coords = {x:item[1],y:item[2]}
        data = LeaderLine.pointAnchor(document.querySelector(item[0]), coords)
    }
    return data
}

const existsAnchor = (item) => {
    var exists = false
    if(typeof item == 'string'){
        if(document.querySelector(item)){
            exists = true
        }
    } else {
        if(document.querySelector(item[0])){
            exists = true
        }
    }
    return exists
}

const drawit = () => {
    for(var i  in props.data.connections){
        const conn = props.data.connections[i]
        if(existsAnchor(conn[0]) && existsAnchor(conn[1]) ) {
            var startElelement = elementOrAnchor(conn[0])
            var endElement = elementOrAnchor(conn[1])
            lines.value[i] = new LeaderLine(
                startElelement,
                endElement,
                props.data.options
            )
            setTimeout(()=>{
                redraw()
            },250)
        }
    }
}




const redrawit = () => {
    for(var i in lines.value){
        lines.value[i].remove()
    }
    lines.value = []
    setTimeout(()=>{
        drawit()
        redraw()
    }, 100)
}

defineExpose({
    redrawit
})

</script>