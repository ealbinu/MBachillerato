<template lang="pug">
div.area
    h2 
        Icon donut_large
        span.label &nbsp;Progreso {{stats.total-stats.unanswered}} /{{stats.total}}
    div.progreso: .bar(:style="'width:'+Math.round(((stats.total-stats.unanswered)/stats.total)*100)+'%'")
    hr
</template>
<script setup>
import {ref, inject, computed} from 'vue'
import Icon from './icon.vue'
const props = defineProps({})

const Status = inject("statusFile")

const stats = computed(() => {
    var answers = Status.value.answers
    var data = {
        total: 0,
        unanswered:0
    }
    if(answers){
        data.total = Object.keys(answers).length
        Object.keys(answers).forEach(function (key) {
            var ans = answers[key]
            if(answers[key] == null){
                data.unanswered++
            }

        })
    }
    return data
})
</script>

<style lang="sass" scoped>
.progreso
    width: 100%
    @include floatcardsmall
    background: $clear
    padding: 3px
    .bar
        height: 20px
        background: $high
        border-radius: 7px
        transition: width 1s
</style>