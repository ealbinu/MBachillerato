<template lang="pug">
template(v-for="(i, index) in repeater" v-if="repeater.length>0")
    BlocksRenderer(:item="i" :blockid="blockid+'-'+index")
</template>
<script setup>
import { data } from 'browserslist';
import {ref} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue';
const props = defineProps({
    data: Object,
    blockid: String
})
const repeater = ref([])

for(var i in props.data.items){
    const item = props.data.items[i]
    for(var key in props.data.properties){
        item[key] = props.data.properties[key]
    }
    repeater.value.push(item)
}
</script>