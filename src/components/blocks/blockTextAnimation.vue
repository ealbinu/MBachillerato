<template lang="pug">
.blockTextAnimation(
    data-splitting
    :style="cssVars"
    :class="[ data.class]"
    :id="data.id"
    v-html="text"
    ref="textsplit"
    )
</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"



const props = defineProps({
    data: Object
})


const textsplit = ref()

const text = ref(props.data.textAnimation)
//const fullTextArray = props.data.text.split('')

onMounted(()=>{
    const results = Splitting({ target: textsplit.value, by: props.data.by || 'words' });

})



const cssVars = computed(() => {
    return {
        '--block-align' : props.data.align || 'left',

    }
})


</script>

<style lang="sass" scoped>


</style>