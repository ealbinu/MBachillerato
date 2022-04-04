<template lang="pug">

.fixed.p-1.bg-white.rounded(class="bottom-1 left-4 lg:left-60 right-7")
    .btn-group.justify-center
        button.btn.btn-xs(@click="navigate(-1)" :class="Status.step==0?'btn-disabled':''" )
            Icon navigate_before
            span Anterior
        template(v-for="(i, index) in steps")
            button.btn.btn-xs(:class="[Status.step==index?'btn-active':'non-active']" @click="gotoStep(index)") {{index+1}}
        button.btn.btn-xs(@click="navigate(1)" :class="Status.step==steps-1?'btn-disabled':''" )
            | Siguiente
            Icon navigate_next
</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from './icon.vue'
const emit = defineEmits()
const props = defineProps({
    steps: {
        type: Number,
        required: true
    }
})
const Status = inject("statusFile")
const Audios = inject("Audios")

const currentStep = ref(0)
const gotoStep = (step) => {
    Status.value.step = step
    emit('stepChanged')
}
const navigate = (dir) => {
    Audios.sclick.play()
    if(
        (dir == -1 && Status.value.step>0) ||
        (dir==1 && Status.value.step<props.steps-1)
    ){
        Status.value.step += dir
        emit('stepChanged')
    }

}
</script>