<template>
<div @click="suma++" class="sumando">QUIMISIMULATION {{suma}}</div>
</template>
<script setup>
import {ref, inject} from 'vue'
const suma = ref(1)
const Activity = inject('activityFile')
console.log(Activity)
</script>
<style>
.sumando{
    background: #ffdd00;
}
</style>