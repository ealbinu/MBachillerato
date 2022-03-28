<template lang="pug">
i.material-icons.theicon(:class="class"): slot
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    class: String
})
</script>
