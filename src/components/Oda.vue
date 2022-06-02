<template lang="pug">
.drawer.drawer-mobile
    input#sidebar(type="checkbox").drawer-toggle
    .drawer-content
        label(for="sidebar" class="z-10 btn btn-sm btn-outline gap-2 drawer-button fixed top-2 left-2 text-xs lg:hidden text-white")
            Icon menu_open
            | Abrir
        OdaActivity
        
    .drawer-side
        label.drawer-overlay(for="sidebar" v-if="!HideMenu")
        OdaDrawer
        //ul.menu.p-4.overflow-y-auto.w-60(class="md:w-80").bg-base-100.text-base-content
            li Hola
            li: a Adios

</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from './icon.vue';
import OdaDrawer from './OdaDrawer.vue';
import FichaTecnica from './FichaTecnica.vue';
import OdaActivity from './OdaActivity.vue';
const props = defineProps({})
const Activity = inject('activityFile')
const HideMenu = inject('hidemenu')
</script>