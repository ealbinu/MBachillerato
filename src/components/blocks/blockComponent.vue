<template lang="pug">
componentODA
</template>
<script setup>
import { defineAsyncComponent, inject } from 'vue'
import * as Vue from 'vue/dist/vue.esm-bundler';
import { loadModule } from 'vue3-sfc-loader'


import BlocksRenderer from '../BlocksRenderer.vue';
import BlockLottie from '../blocks/blockLottie.vue';

const props = defineProps({
    data: Object,
    blockid: String
})

const Activity = inject('activityFile')

const Path = inject('path')


const componentPath = Path+props.data.component


const options = {
      moduleCache: { vue: Vue },
      getFile(url) {
        return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
      },
      addStyle(styleStr) {
        const style = document.createElement('style');
        style.textContent = styleStr;
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
      },
      log(type, ...args) {
        console.log(type, ...args);
      }
    }


const componentODA = Vue.defineAsyncComponent(()=>loadModule(componentPath, options))


</script>
<style lang="">
    
</style>