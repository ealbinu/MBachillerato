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

const drawit = () => {
    for(var i  in props.data.connections){
        const conn = props.data.connections[i]
        if(document.querySelector(conn[0]) && document.querySelector(conn[1]) ) {
            lines.value[i] = new LeaderLine(
                document.querySelector(conn[0]),
                document.querySelector(conn[1]),
                props.data.options
            )
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