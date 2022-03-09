<template lang="pug">
img(:src="'odas/'+Activity.id+'/'+data.img").blockImg
</template>
<script setup>
import {ref,inject} from 'vue'
const Activity = inject('activityFile')
const props = defineProps({
    data: {
        type: Object
    }
})
</script>
<style lang="sass" scoped>
.blockImg
    vertical-align: middle
    max-width: 100%
</style>