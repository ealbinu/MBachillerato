<script>

import Intro from './components/Intro.vue'
import ActivitySidebar from './components/ActivitySidebar.vue'
import ActivityWindow from './components/ActivityWindow.vue'
import axios from 'axios'

import { ref, inject, provide } from 'vue'

export default {
  components:{Intro, ActivitySidebar, ActivityWindow},
  setup () {
    //###########################

    const main = ref({
      state: '@activity'
    })
    const changestate = ((newstate) => {
      main.value.state = newstate
    })
    
    const activityFile = inject('activityFile')

    
    const statusFile = ref(
      {
        screen: 0
      }
    )

    provide('statusFile', ref(statusFile))


    ////////////////////////////
    return {
      main,
      changestate,
      activityFile,
      status
    }
  }
}
</script>

<template lang="pug">
template(v-if="activityFile")
  template(v-if="main.state == '@intro'")
    Intro(@start="changestate('@activity')")
  template(v-else-if="main.state == '@activity'")
    ActivitySidebar
    ActivityWindow(v-model:screenModel="status.screen")
  template(v-else-if="main.state == '@ended'")
    p Ended
</template>

<style>

</style>
