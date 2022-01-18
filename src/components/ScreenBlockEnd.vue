<template lang="pug">
.block.ScreenBlockEnd: .text-center
    template(v-if="!Status.finalize")
        template(v-if="stats.unansweredLength")
            div.my-3: span De un total de #[strong {{stats.total}} preguntas] tienes #[strong.high {{stats.unansweredLength}} sin contestar].
            template(v-for="(i, index) in stats.unanswered")
                button(@click="gotoUnanswered(index)").high.ma-1 {{unansweredBlock(index)}}
            div.my-3 ¿Deseas finalizar?
        template(v-else-if="stats.total>0")
            div.my-3: span Has contestado todas las preguntas. Verifica tus respuestas y da clic en #[strong "finalizar"].
        template(v-else)
            div.my-3: span Muy bien. Has llegado al final de la actividad.
        hr
        div.my-4: button.important(@click="finalize") Finalizar
    template(v-else)
        div.my-3: strong Actividad finalizada.
        template(v-if="results.total>0")
            div.my-3 De un total de #[strong {{results.total}} preguntas] obtuviste un #[strong.high {{results.oksPercentage}}% de aciertos].
            template(v-if="results.errors>0")
                div.my-3 A continuación podrás ver un resúmen de tus resultados:
                .row.wrap
                    template(v-for="(i, index) in Status.result")
                        div(:class="i?'isok':'notok'").px-3.bg-light.ma-1.floatcard
                            button(@click="gotoUnanswered(index)").bg-clear.ma-1 {{unansweredBlock(index)}}
        template(v-else)
        //0 preguntas
        //End links
        div.my-3 Puedes ver tus resultados individuales o repasar los contenidos navegando con el menú de la izquierda.
        div.my-3 También puedes reiniciar la actividad:
        button(@click="resetApp").important Reiniciar

</template>
<script setup>
import {ref, getCurrentInstance, inject, computed} from 'vue'
import { useStorage } from "vue3-storage"
import _ from 'lodash'

const Activity = inject('activityFile')
const Status = inject("statusFile")
const currentInstance = getCurrentInstance()
const props = defineProps({})


const unansweredBlock = (blockid) => {
    console.log(blockid)
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
    if(results.value.total){
        results.value.oksPercentage = Math.round((results.value.oks*100)/results.value.total)
        results.value.errorsPercentage = 100 - results.value.oksPercentage
    }
}
if(Status.value.finalize){
    setTimeout(function () {
        finalize()
    }, 1000)
}

const resetApp = () => {
    console.log(Activity.id)
    const storage = useStorage(Activity.id+'_')
    storage.removeStorageSync('status')
    location.reload()
}

</script>