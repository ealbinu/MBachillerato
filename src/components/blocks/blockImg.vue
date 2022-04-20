<template lang="pug">
img(:src="'odas/'+Activity.id+'/'+data.img" :class="data.class").blockImg
</template>
<script setup>
import {ref,inject, computed} from 'vue'
const Activity = inject('activityFile')
const props = defineProps({
    data: Object
})


</script>
<style lang="sass" scoped>
.blockImg
    display: inline-block
    vertical-align: middle
    //max-width: 100%
</style>