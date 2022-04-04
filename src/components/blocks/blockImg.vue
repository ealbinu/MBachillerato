<template lang="pug">
img(:src="'odas/'+Activity.id+'/'+data.img" :style="cssVars" :class="data.class").blockImg
</template>
<script setup>
import {ref,inject, computed} from 'vue'
const Activity = inject('activityFile')
const props = defineProps({
    data: Object
})

const cssVars = computed(() => {
    return {
        //'--block-max-width' : props.data.maxw || '100%',
    }
})

</script>
<style lang="sass" scoped>
.blockImg
    display: inline-block
    vertical-align: middle
    //max-width: 100%
</style>