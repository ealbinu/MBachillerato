<template lang="pug">
.block.ScreenBlockEnd: .text-center
    template(v-if="!Status.finalize")
        template(v-if="stats.unansweredLength")
            div.my-3: span De un total de #[strong {{stats.total}} preguntas] tienes #[strong.high {{stats.unansweredLength}} sin contestar].
            template(v-for="(i, index) in stats.unanswered")
                button(@click="gotoUnanswered(index)").high.ma-1 {{unansweredBlock(index)}}
            div.my-3 ¿Deseas finalizar?
        template(v-else)
            div.my-3: span Has contestado todas las preguntas. Verifica tus respuestas y da clic en #[strong "finalizar"].
        hr
        div.my-4: button.important(@click="finalize") Finalizar
    template(v-else)
        div.my-3: strong Actividad finalizada.
        div.my-3 De un total de #[strong {{results.total}} preguntas] obtuviste un #[strong.high {{results.oksPercentage}}% de aciertos].
        template(v-if="results.errors>0")
            div.my-3 A continuación podrás ver un resúmen de tus resultados:
            .row.wrap
                template(v-for="(i, index) in Status.result")
                    div(:class="i?'isok':'notok'").px-3.bg-light.ma-1.floatcard
                        button(@click="gotoUnanswered(index)").bg-clear.ma-1 {{unansweredBlock(index)}}
        p {{Status.result}}
        p {{results}}
</template>
<script setup>
import {ref, getCurrentInstance, inject, computed} from 'vue'
import _ from 'lodash'

const Activity = inject('activityFile')
const Status = inject("statusFile")
const currentInstance = getCurrentInstance()
const props = defineProps({})


const unansweredBlock = (blockid) => {
    var sp = blockid.split('-')
    var scr = sp[0]
    var blk = sp[1]
    var scrTitle = Activity.screens[scr].title
    return scrTitle + ' > Bloque ' + blk
}
const gotoUnanswered = (blockid) => {
    var sp = blockid.split('-')
    var scr = sp[0]
    var blk = sp[1]
    Status.value.screen = scr*1
    Status.value.step = blk*1
}

const stats = computed(() => {
    var answers = Status.value.answers
    var data = {
        tot: '',
        total: 0,
        unanswered: {},
        unansweredLength:0
    }
    if(answers){
        data.total = Object.keys(answers).length
        var unaList = {}
        Object.keys(answers).forEach(function (key) {
            var ans = answers[key]
            if(answers[key] == null){
                unaList[key] = ans
                data.unansweredLength++
            }

        })
        _(unaList).keys().sort().each(function (key){
            data.unanswered[key] = unaList[key]
        })
    }
    return data
})

const results = ref({
    total: 0,
    oks: 0,
    errors: 0,
    oksPercentage: 0,
    errorsPercentage: 0
})



const finalize = () => {
    Status.value.finalize = true
    currentInstance.appContext.config.globalProperties.emitter.emit('finalize')
    for(var i in Status.value.result){
        results.value.total++
        if(Status.value.result[i]){
            results.value.oks++
        } else {
            results.value.errors++
        }
    }
    results.value.oksPercentage = Math.round((results.value.oks*100)/results.value.total)
    results.value.errorsPercentage = 100 - results.value.oksPercentage
}
if(Status.value.finalize){
    setTimeout(function () {
        finalize()
    }, 1000)
}
</script>