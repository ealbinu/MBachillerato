<script setup>
import axios from 'axios'

import Intro from './components/Intro.vue'
import ActivitySidebar from './components/ActivitySidebar.vue'
import ActivityWindow from './components/ActivityWindow.vue'
import ActivityBuilder from './components/ActivityBuilder.vue'

import { ref, inject, provide, watch, watchEffect } from 'vue'
import Oda from './components/Oda.vue'

const Activity = inject('activityFile')
const Status = inject("statusFile");

const Builder = inject("builderFile");

const changestate = ((newstate) => {
  Status.value.state = newstate
})



  




</script>

<template lang="pug">

ActivityBuilder(v-if="Builder")

template(v-if="Activity && Status")
  template(v-if="Status.state == '@intro'")
    Intro(@start="changestate('@activity')")
  template(v-else-if="Status.state == '@activity'")
    //ActivitySidebar
    //ActivityWindow
    Oda

</template>

<style lang="sass">
@import "./App.sass"
</style>
