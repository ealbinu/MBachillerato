<template lang="pug">
.block.ScreenBlockEnd: .text-center
    template(v-if="!Status.finalize")
        template(v-if="stats.unansweredLength")
            div.my-6.text-2xl: span De un total de #[strong {{stats.total}} preguntas] tienes #[strong.high {{stats.unansweredLength}} sin contestar].
            template(v-for="(i, index) in stats.unanswered")
                button(@click="gotoUnanswered(index)").btn.high.btn-sm.m-1 {{unansweredBlock(index)}}
                
            
        template(v-else-if="stats.total>0")
            div.my-3: span Has contestado todas las preguntas. Verifica tus respuestas y da clic en #[strong "finalizar"].
        template(v-else)
            div.my-3: span Muy bien. Has llegado al final de la actividad.
        template(v-if="!Blocked")
                div.my-6.text-xl ¿Deseas finalizar?
                div.my-4: button.btn-accent.btn-wide.important(@click="finalize").btn-lg Finalizar
    template(v-else)
        div.my-3: strong Actividad finalizada.
        template(v-if="Results.total>0")
            div.my-3 De un total de #[strong {{Results.total}} preguntas] obtuviste un #[strong.high {{Results.oksPercentage}}% de aciertos].
            template(v-if="Results.errors>0")
                div.my-3 A continuación podrás ver un resúmen de tus resultados:
                .row.wrap
                    template(v-for="(i, index) in Status.result")
                        div(:class="i?'isok':'notok'").px-3.ma-1.floatcard.my-1
                            button.btn.btn-sm.m-1(@click="gotoUnanswered(index)").ma-1 {{unansweredBlock(index)}}
        template(v-else)
        //0 preguntas
        //End links
        div.my-3 Puedes ver tus resultados individuales o repasar los contenidos navegando con el menú de la izquierda.
        template(v-if="!Blocked && !reseting")
            div.my-3 También puedes reiniciar la actividad:
            button(@click="resetApp").btn.btn-accent Reiniciar
    Arrow(v-if="reseting")

</template>
<script setup>
import {ref, getCurrentInstance, inject, computed} from 'vue'
import { useStorage } from "vue3-storage"
import _ from 'lodash'
import Arrow from './Arrow.vue';

const Audios = inject('Audios')
const Activity = inject('activityFile')
const Status = inject("statusFile")
const Results = inject("resultsFile")
const currentInstance = getCurrentInstance()
const props = defineProps({})

const Blocked = inject('blocked')
const reseting = ref(false)
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




const finalize = () => {

    Status.value.finalize = true
    currentInstance.appContext.config.globalProperties.emitter.emit('finalize')
    for(var i in Status.value.result){
        Results.value.total++
        if(Status.value.result[i]){
            Results.value.oks++
        } else {
            Results.value.errors++
        }
    }
    if(Results.value.total){
        Results.value.oksPercentage = Math.round((Results.value.oks*100)/Results.value.total)
        Results.value.errorsPercentage = 100 - Results.value.oksPercentage
    }
    Audios.sfinalize.play()
}
if(Status.value.finalize){
    setTimeout(function () {
        finalize()
    }, 1000)
    
}

const resetApp = () => {
    reseting.value = true
    var endDataString = JSON.stringify({reset: true})
    window.top.postMessage(endDataString, "*")
    setTimeout(()=>{
        const storage = useStorage(Activity.id+'_')
        storage.removeStorageSync('status')
        location.reload()
    }, 1000)

}

</script>

<style lang="sass" scoped>
.ScreenBlockEnd
    color: $light
</style>