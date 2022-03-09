<template lang="pug">

//-Simple text
span(v-if="typeof item === 'string' " v-html="item")
//-Break
br(v-else-if="item.br")
//-Break
hr(v-else-if="item.hr").my-2
//-Break
br(v-else-if="item.br")
//-Block text
div(v-else-if="item.text" v-html="item.text" :class="item.class || 'my-2'")
//-Block Term
BlockTerm(v-else-if="item.term" :data="item")
//-Block Image
BlockImg(v-else-if="item.img" :data="item")
//-Math jax
BlockMath(v-else-if="item.math" :data="item")
//- Drag & drop
BlockDragDrop(v-if="item.dragdrop" :data="item" :blockid="blockid")
//- Sortable
BlockSortable(v-if="item.sortable" :data="item" :blockid="blockid")
//- Select
BlockSelect(v-if="item.select" :data="item" :blockid="blockid")
//-Chart
BlockChart(v-if="item.chart" :data="item" :blockid="blockid")
//-Dialog
BlockDialog(v-if="item.dialog" :data="item" :blockid="blockid")
//-Plot
BlockPlot(v-if="item.plot" :data="item" :blockid="blockid")
//-Grid
BlockGrid(v-if="item.grid" :data="item" :blockid="blockid")
//-Group
BlockGroup(v-if="item.group" :data="item" :blockid="blockid")
</template>
<script setup>
import {ref} from 'vue'

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

const props = defineProps({
    item: [Object, String],
    blockid: String
})
</script>