<template lang="pug">
transition(name="zoom" @after-leave="start")
    div.dialog.intro(v-if="dialog")
        button.important(@click="close") Comenzar
</template>
<script>
import { ref } from 'vue'
export default{
    setup (props, context) {
        const dialog = ref(true)
        const close = (()=>{
            dialog.value = false
        })
        const start = (() => {
            context.emit('start')
        })
        return{
            dialog,
            close,
            start
        }
    }
}


</script>