<template lang="pug">
img(:src="Path+data.img" :class="data.class" :id="data.id").blockImg
</template>
<script setup>
import {ref,inject, computed} from 'vue'
const Activity = inject('activityFile')
const props = defineProps({
    data: Object
})
const Path = inject('path')

</script>
<style lang="sass" scoped>
.blockImg
    display: inline-block
    vertical-align: middle
    //max-width: 100%
</style>