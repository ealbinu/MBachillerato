<template lang="pug">

.blockPlot(ref="blockParent"): div(ref="block")

</template>
<script setup lang="tsx">
import {ref, computed} from 'vue'


const props = defineProps({
    data: Object,
    blockid: String
})
const cssVars = computed(() => {
    return {
        '--fontSize' : props.data.size || '1rem',
    }
})

const blockParent = ref()
const block = ref()
const instance = ref()

const initialize = () => {

    let contentsBounds = blockParent.value.getBoundingClientRect();
    let width = 340;
    let height = 200;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;

    instance.value = functionPlot({
        title: typeof props.data.plot == 'string' ? props.data.plot : '',
        target: block.value,
        width, height,
        yAxis: props.data.yAxis,
        xAxis: props.data.xAxis,
        grid: false,
        data: props.data.data,
        annotations: props.data.annotations
    })

    

}
setTimeout(()=> {
    initialize()
}, 500)

</script>
<style lang="sass">
.blockPlot
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    max-width: 500px
    text-align: center
    margin: 0 auto
    .function-plot
        max-width: 100% !important
        margin: 0 auto
        font-family: 'Fira Sans', sans-serif
        .axis-label
            font-size: 1rem
        .title
            font-size: 1.2rem
        .x.axis
            .tick
                line
                    stroke-width: 2px
                //text

            //path.domain
        .y.axis
            .tick
                line
                    stroke-width: 2px
                //text
            //path.domain
        .annotations
            text
                font-size: 1.4rem
        .graph
            path
                stroke-width: 2px !important
</style>