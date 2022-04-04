<template lang="pug">
template(v-if="data.chart=='line' ")
    p {{data}}
    apexchart(:type="data.chart" :options="data.options" :series="data.series")
//div(v-if="data.block" :style="cssVars" v-html="mjax(data.math)").blockmathCont
//span(v-else :style="cssVars" v-html="mjax(data.math)").blockmathCont
    

</template>
<script setup>
import {ref, computed} from 'vue'
import VueApexCharts from "vue3-apexcharts";
const props = defineProps({
    data: Object,
    blockid: String
})
const cssVars = computed(() => {
        return {
            '--fontSize' : props.data.size || '1rem',
        }
    })

</script>
<style lang="sass">

</style>