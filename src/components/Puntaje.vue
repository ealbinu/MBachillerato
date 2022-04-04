<template lang="pug">
div.area(v-if="Status.finalize")
    h2.puntaje(:class="colorStyles()")
        Icon auto_awesome
        span.label &nbsp;Puntaje: {{Results.oksPercentage}}%
    //.puntaje #[span.label {{Results.okPercentage}}]
    //p {{Results}}
</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from './icon.vue'
const props = defineProps({})
const Status = inject('statusFile')
const Results = inject("resultsFile")

const colorStyles = () => {
    const oks = Results.value.oksPercentage 
    var classReturn = 'ok1'
    switch(true){
        case (oks<=100 && oks>75):
            classReturn = 'ok4'
            break
        case (oks<=75 && oks>50):
            classReturn = 'ok3'
            break
        case (oks<=50 && oks>25):
            classReturn = 'ok2'
            break
    }
    return classReturn
}

</script>

<style lang="sass" scoped>
.puntaje
    @include floatcardsmall
    padding: 10px 4px
    display: flex
    align-items: center
    &.ok4
        background: $high
        color: $clear
        .material-icons
            filter: invert(100%)
    &.ok3
        background: $accent
        color:$clear
        .material-icons
            filter: invert(100%)
    &.ok2
        background: $test
        color: #fff
    &.ok1
        background: $negative
        color:$clear
        .material-icons
            filter: invert(100%)
</style>