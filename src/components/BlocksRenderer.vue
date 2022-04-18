<template lang="pug">



//-Simple text
span(v-if="typeof item === 'string' " v-html="item")
//-Simple variable
span(v-else-if="item.variable " v-html="Status.answers[item.variable]")
//-Result variable
span(v-else-if="item.variableR " v-html="Status.result[item.variableR]")
//-Break
template(v-else-if="item.br"): br(v-for="(i, index) in item.br")
//-Hr
hr(v-else-if="item.hr").my-2
//-Span Texts
span(v-else-if="item.span" v-html="item.span" :class="[item.class]" )
//-Direct HTML
div(v-else-if="item.html" v-html="item.html" :class="item.class" :id="item.id")
//-Icon
BlockIcon(v-else-if="item.icon" :data="item")
//-Text
BlockText(v-else-if="item.text" :data="item" :key="blockid")
//-Text
BlockTextAnimation(v-else-if="item.textAnimation" :data="item" :key="blockid")
//-Instructions
BlockInstructions(v-else-if="item.instruction" :data="item" :key="blockid")
//-Instructions-v2
BlockInst(v-else-if="item.inst" :data="item" :key="blockid")
//-Term
BlockTerm(v-else-if="item.term" :data="item")
//-Image
BlockImg(v-else-if="item.img" :data="item")
//-Math jax
BlockMath(v-else-if="item.math" :data="item")
//- Drag & drop
BlockDragDrop(v-else-if="item.dragdrop" :data="item" :blockid="blockid")
//- Sortable
BlockSortable(v-else-if="item.sortable" :data="item" :blockid="blockid")
//- Select
BlockSelect(v-else-if="item.select" :data="item" :blockid="blockid")
//-Chart
BlockChart(v-else-if="item.chart" :data="item" :blockid="blockid")
//-Dialog
BlockDialog(v-else-if="item.dialog" :data="item" :blockid="blockid")
//-Plot
BlockPlot(v-else-if="item.plot" :data="item" :blockid="blockid")
//-Grid
BlockGrid(v-else-if="item.grid" :data="item" :blockid="blockid")
//-Group
BlockGroup(v-else-if="item.group" :data="item" :blockid="blockid")
//-Input
BlockInput(v-else-if="item.input" :data="item" :blockid="blockid")
//-Colorize
BlockColorize(v-else-if="item.colorize" :data="item" :blockid="blockid")
//-Css
BlockCss(v-else-if="item.css" :data="item" :blockid="blockid")
//-Chatbot
BlockChatbot(v-else-if="item.chatbot" :data="item" :blockid="blockid")
//-Card
BlockCard(v-else-if="item.card" :data="item" :blockid="blockid")
//-Drag Single Item
BlockDragItem(v-else-if="item.drag" :data="item" :blockid="blockid")
//-Line
BlockLine(v-else-if="item.line" :data="item")
//-Repeater
BlockRepeater(v-else-if="item.repeater" :data="item" :blockid="blockid")
//-Diagram
BlockDiagram(v-else-if="item.diagram" :data="item" :blockid="blockid")


</template>
<script setup>
import {ref, inject} from 'vue'

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

const props = defineProps({
    item: [Object, String],
    blockid: String
})
const Status = inject('statusFile')

</script>