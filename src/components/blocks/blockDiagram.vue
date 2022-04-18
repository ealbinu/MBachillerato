<template lang="pug">

.grid(:class="[gridmode]").gap-2
    template(v-for="(i, index) in data.blocks")
        .flex(:class="[colsmode] ").gap-2.justify-evenly
            template(v-for="(iCol, indexCol) in i")
                //template(v-if="items['grid-'+blockid+'-'+abc[index]+indexCol]")
                template(v-if="(data.expansion && items[iCol.id]) || (!data.expansion)")
                    BlockCard(:id="iCol.id" :data="{content: iCol.content, class:cardClass(iCol), clickable:iCol.child}" :blockid="blockid+'-diagram-'+index+'-'+indexCol" @click="expand(iCol.child)")

BlockLine(:data="{line:1, connections: connections, options: data.connectionsOptions }" ref="blocklines")

</template>
<script setup>
import {ref, inject} from 'vue'
import BlockCard from './blockCard.vue';
import BlockLine from './blockLine.vue';
import BlocksRenderer from '../BlocksRenderer.vue';


const Audios = inject('Audios')

const props = defineProps({
    data: Object,
    blockid: String
})




const cardClass = (item) => {
    let classreturn = props.data.classItem
    if(props.data.expansion){
        if(item.child){
            classreturn += ' cursor-pointer animate__animated animate__pulse animate__infinite animate__slower '
        }
    }
    classreturn += ' ' + (item.class || '')
    return classreturn
}



const abc = ['a','b','c','d','e','f']

const blocklines = ref(null)

const gridmode = props.data.mode=='vertical' ? ('grid-rows-'+props.data.blocks.length) : ('grid-cols-'+props.data.blocks.length)
const colsmode = props.data.mode=='vertical' ? '' : 'flex-col'


const items = ref({})
const connections = ref([])

for(var i in props.data.blocks){
    for(var x in props.data.blocks[i]){
        let con = props.data.blocks[i][x]
        items.value[con.id] = items.value[con.id]===false ? false : true
        if(con.child){
            for(var ch in con.child){
                connections.value.push(['#'+con.id, '#'+con.child[ch]])
                items.value[con.child[ch]] = false
            }
        }
    }
}




const expand = (childs) => {
    if(childs){
        for(var ch in childs){
            items.value[childs[ch]] = !items.value[childs[ch]]
            //closechildren
            if(!items.value[childs[ch]]){
                //console.log('CloseChildrens')
            }
        }

        blocklines.value.redrawit()
        Audios.sBlockSelect.play()
    }
}



</script>