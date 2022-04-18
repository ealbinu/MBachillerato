<template lang="pug">
.card.bg-base-100(:class="[data.class]" :id="data.id").shadow-xl
    .card-body.text-gray-700.px-2.py-4(class="min-h-[3rem]")
        template(v-for="(i, index) in data.content")
            BlocksRenderer(:item="i" :blockid="blockid+'-card-'+index")
        template(v-if="data.clickable")
            Icon(class="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-300") touch_app
</template>
<script setup>
import {ref} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue';
import Icon from '../icon.vue';
const props = defineProps({
    data:Object,
    blockid: String
})
</script>