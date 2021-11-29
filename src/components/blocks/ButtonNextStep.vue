<template lang="pug">
div.ButtonNextStep: button(@click="clicked" v-html="label")
</template>
<script>
import {ref} from 'vue'
export default {
    components:{},
    props:['label'],
    setup(props,context){
        const clicked = () => {
            context.emit('clicked')
        }
        return {
            clicked
        }
    }
}
</script>

<style lang="sass">
.ButtonNextStep
    text-align: center
    margin: 10px 0
</style>