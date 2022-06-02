<template lang="pug">



//-Simple text
span(v-if="typeof itemdata === 'string' " v-html="itemdata")
//-Simple variable
span(v-else-if="itemdata.variable " v-html="Status.answers[itemdata.variable]")
//-Result variable
span(v-else-if="itemdata.variableR " v-html="Status.result[itemdata.variableR]")
//-Break
template(v-else-if="itemdata.br"): br(v-for="(i, index) in itemdata.br")
//-Hr
hr(v-else-if="itemdata.hr").my-2
//-Span Texts
span(v-else-if="itemdata.span" v-html="itemdata.span" :class="[itemdata.class]" )
//-Direct HTML
div(v-else-if="itemdata.html" v-html="itemdata.html" :class="itemdata.class" :id="itemdata.id")
//-Icon
BlockIcon(v-else-if="itemdata.icon" :data="itemdata")
//-Text
BlockText(v-else-if="itemdata.text" :data="itemdata" :key="blockid")
//-Text
BlockTextAnimation(v-else-if="itemdata.textAnimation" :data="itemdata" :key="blockid")
//-Instructions
BlockInstructions(v-else-if="itemdata.instruction" :data="itemdata" :key="blockid")
//-Instructions-v2
BlockInst(v-else-if="itemdata.inst" :data="itemdata" :key="blockid")
//-Term
BlockTerm(v-else-if="itemdata.term" :data="itemdata")
//-Image
BlockImg(v-else-if="itemdata.img" :data="itemdata")
//-Math jax
BlockMath(v-else-if="itemdata.math" :data="itemdata")
//- Drag & drop
BlockDragDrop(v-else-if="itemdata.dragdrop" :data="itemdata" :blockid="blockid")
//- Sortable
BlockSortable(v-else-if="itemdata.sortable" :data="itemdata" :blockid="blockid")
//- Select
BlockSelect(v-else-if="itemdata.select" :data="itemdata" :blockid="blockid")
//-Chart
BlockChart(v-else-if="itemdata.chart" :data="itemdata" :blockid="blockid")
//-Dialog
BlockDialog(v-else-if="itemdata.dialog" :data="itemdata" :blockid="blockid")
//-Plot
BlockPlot(v-else-if="itemdata.plot" :data="itemdata" :blockid="blockid")
//-Grid
BlockGrid(v-else-if="itemdata.grid" :data="itemdata" :blockid="blockid")
//-Group
BlockGroup(v-else-if="itemdata.group" :data="itemdata" :blockid="blockid")
//-Input
BlockInput(v-else-if="itemdata.input" :data="itemdata" :blockid="blockid")
//-Colorize
BlockColorize(v-else-if="itemdata.colorize" :data="itemdata" :blockid="blockid")
//-Css
BlockCss(v-else-if="itemdata.css" :data="itemdata" :blockid="blockid")
//-Chatbot
BlockChatbot(v-else-if="itemdata.chatbot" :data="itemdata" :blockid="blockid")
//-Card
BlockCard(v-else-if="itemdata.card" :data="itemdata" :blockid="blockid")
//-Drag Single itemdata
BlockDragItem(v-else-if="itemdata.drag" :data="itemdata" :blockid="blockid" )
//-Line
BlockLine(v-else-if="itemdata.line" :data="itemdata")
//-Repeater
BlockRepeater(v-else-if="itemdata.repeater" :data="itemdata" :blockid="blockid")
//-Diagram
BlockDiagram(v-else-if="itemdata.diagram" :data="itemdata" :blockid="blockid")
//-Editor
BlockEditor(v-else-if="itemdata.editor" :data="itemdata" :blockid="blockid")
//-Component Dynamic
BlockComponent(v-else-if="itemdata.component" :data="itemdata" :blockid="blockid")
//-Lottie
BlockLottie(v-else-if="itemdata.lottie" :data="itemdata" :blockid="blockid" @completed="emit('completed')")
//-Graph JXG
BlockGraph(v-else-if="itemdata.graph" :data="itemdata" :blockid="blockid")
//-Classlist
BlockClasslist(v-else-if="itemdata.classlist" :data="itemdata" :blockid="blockid")

</template>
<script setup>
import {ref, inject} from 'vue'
import _ from 'lodash'
import BlockMath from './blocks/blockMath.vue';
import BlockDragDrop from './blocks/blockDragDrop.vue';
import BlockSelect from './blocks/blockSelect.vue';
import BlockTerm from './blocks/blockTerm.vue';
import BlockImg from './blocks/blockImg.vue';
import BlockChart from './blocks/blockChart.vue';
import BlockPlot from './blocks/blockPlot.vue';
import BlockDialog from './blocks/blockDialog.vue';
import BlockGrid from './blocks/blockGrid.vue';
import BlockGroup from './blocks/blockGroup.vue';
import BlockSortable from './blocks/blockSortable.vue';
import BlockText from './blocks/blockText.vue';
import BlockIcon from './blocks/blockIcon.vue';
import BlockInstructions from './blocks/blockInstructions.vue';
import BlockInst from './blocks/blockInst.vue';
import BlockTextAnimation from './blocks/blockTextAnimation.vue';
import BlockInput from './blocks/blockInput.vue';
import BlockColorize from './blocks/blockColorize.vue';
import BlockCss from './blocks/blockCss.vue';
import BlockChatbot from './blocks/blockChatbot.vue';
import BlockCard from './blocks/blockCard.vue';
import BlockDragItem from './blocks/blockDragItem.vue';
import BlockLine from './blocks/blockLine.vue';
import BlockRepeater from './blocks/blockRepeater.vue';
import BlockDiagram from './blocks/blockDiagram.vue';
import BlockEditor from './blocks/blockEditor.vue';
import BlockComponent from './blocks/blockComponent.vue';
import BlockLottie from './blocks/blockLottie.vue';
import BlockGraph from './blocks/blockGraph.vue';
import BlockClasslist from './blocks/blockClasslist.vue';


const emit = defineEmits(['completed'])
const props = defineProps({
    item: [Object, String],
    blockid: String
})
const Activity = inject('activityFile')
const Status = inject('statusFile')

const itemdata = ref(props.item)


//Add symbol properties
if(itemdata.value.symbol){
    let symid = itemdata.value.symbol
    let sym = Activity.symbols[symid]
    for(var i in sym){
        itemdata.value[i] = sym[i]
    }
}
//Shuffle attribute
if(itemdata.value.shuffle){
    itemdata.value[itemdata.value.shuffle] = _.shuffle(itemdata.value[itemdata.value.shuffle])
}


</script>