<template lang="pug">
component(:is="'style'") {{data.css}}
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    data: Object
})
const block = ref()

</script>