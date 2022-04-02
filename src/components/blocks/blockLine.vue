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
        console.log('upd')
    }
)

const lines = ref([])

const redraw = () => {
    for(var i in lines.value){
            lines.value[i].position()
        }
}

onMounted(()=>{
    LeaderLine.positionByWindowResize = false
    document.querySelector('.drawer-content').addEventListener('scroll', function() {
        redraw()
    })
    window.addEventListener('resize', function() {
        redraw()
    })
    for(var i  in props.data.connections){
        const conn = props.data.connections[i]
        lines.value[i] = new LeaderLine(
            document.querySelector(conn[0]),
            document.querySelector(conn[1]),
            props.data.options
        )
    }
    

})

</script>