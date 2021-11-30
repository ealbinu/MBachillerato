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

    const statusFile = ref(
      {
        state: '@intro',
        screen: 0
      }
    )

    provide('statusFile', ref(statusFile))

    const changestate = ((newstate) => {
      statusFile.value.state = newstate
    })
    
    const activityFile = inject('activityFile')

    
    


    ////////////////////////////
    return {
      changestate,
      activityFile,
      statusFile
    }
  }
}
</script>

<template lang="pug">
template(v-if="activityFile")
  template(v-if="statusFile.state == '@intro'")
    Intro(@start="changestate('@activity')")
  template(v-else-if="statusFile.state == '@activity'")
    ActivitySidebar
    ActivityWindow(v-model:screenModel="statusFile.screen")
  template(v-else-if="statusFile.state == '@ended'")
    p Ended
</template>

<style>

</style>
