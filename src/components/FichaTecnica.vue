<template lang="pug">
.FichaTecnica
    BlockDialog(:data='buttonBlock' :hidesmenu="true")

</template>
<script setup>
import {ref, inject} from 'vue'
import BlockSimpleDialog from './blocks/blockSimpleDialog.vue';
import Icon from './icon.vue';
import BlockDialog from './blocks/blockDialog.vue';

const props = defineProps({})
const Activity = inject('activityFile')

const iconUrlImg = '<div class="tooltip" data-tip="Ficha técnica"> <img src="assets/icons/'+Activity.programa+'/ico-ficha-tecnica.png" class="w-12"> </div>'


const fichagrid = ref([])

var tableStart = '<table class="table bg-white table-fixed table-zebra">'
var tds = []
var tableEnd = '</table>'
for(var i in Activity.ficha){
    //var grid = '<div class="gridy"><div class="text-bold">'+Activity.ficha[i][0]+'</div><div>'+Activity.ficha[i][1]+'</div></div>'
    tds.push(' <tr> <td class="bg-white text-bold text-xl max-w-sm break-normal whitespace-normal">'+Activity.ficha[i][0]+'</td><td class="text-lg font-light max-w-sm break-normal whitespace-normal bg-white">'+Activity.ficha[i][1]+'</td></tr>')

}
fichagrid.value.push({"html": tableStart+tds.join('')+tableEnd})

const buttonBlock = {
    "button": { "html":iconUrlImg },
    "buttonClass": "",
    "content": [
        {"text": "Ficha técnica", "class":"text-4xl text-center", "align":"center"},
        {"group":1, "content": fichagrid.value}
    ]
}
</script>

<style lang="sass" scoped>
.FichaTecnica .gridy
    max-width: 600px
    text-align: left
    display: grid
    grid-template-columns: 1fr 2fr
    padding: 4px 10px
    &:nth-child(odd)
        background: rgba(0,0,0,0.03)
</style>