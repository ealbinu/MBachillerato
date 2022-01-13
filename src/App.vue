<script setup>
import axios from 'axios'

import Intro from './components/Intro.vue'
import ActivitySidebar from './components/ActivitySidebar.vue'
import ActivityWindow from './components/ActivityWindow.vue'

import { ref, inject, provide, watch, watchEffect } from 'vue'

const Activity = inject('activityFile')
const Status = inject("statusFile");


const changestate = ((newstate) => {
  Status.value.state = newstate
})

  

</script>

<template lang="pug">
template(v-if="Activity && Status")
  template(v-if="Status.state == '@intro'")
    Intro(@start="changestate('@activity')")
  template(v-else-if="Status.state == '@activity'")
    ActivitySidebar
    ActivityWindow
  template(v-else-if="Status.state == '@ended'")
    p Ended
</template>

<style lang="sass">
@import "./App.sass"
</style>
