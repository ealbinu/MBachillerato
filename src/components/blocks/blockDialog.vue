<template lang="pug">
.blockDialog(:style="[data.style]" :id="data.id")
    button(@click="open" :class="data.buttonClass").animate__animated.animate__pulse.animate__infinite.animate__slower
        template(v-for="(i, index) in data.button")
            BlocksRenderer(:item="i" :blockid="blockid+'-button-'+index")
    
    input(type="checkbox" :id="blockid" v-model="dialog").modal-toggle
    .modal
        .modal-box.bg-white.text-primary(ref="itemBox")
            label(class="btn btn-sm btn-circle absolute right-2 top-2" @click="close"): Icon close
            .ma-1.pt-5
                perfect-scrollbar
                    template(v-for="(i, index) in data.content")
                        BlocksRenderer(:item="i" :blockid="blockid+'-content-'+index")

template(v-if="data.states")
    BlockStates(key="state" :states="['opened', 'closed']" :data="data.states" ref="states" :blockid="blockid+'-state'")

</template>
<script setup>
import {ref, inject} from 'vue'
import Icon from '../icon.vue'
import BlocksRenderer from '../BlocksRenderer.vue'
import BlockStates from './blockStates.vue'
import { onClickOutside } from '@vueuse/core'

const itemBox = ref(null)


const Audios = inject('Audios')
const HideMenu = inject('hidemenu')
const props = defineProps({
    data: Object,
    blockid: String,
    hidesmenu: Boolean
})
const dialog = ref(false)
const states = ref()

    onClickOutside(itemBox, (event) => {
        if(dialog.value) {
            close()
        }
    })


const open = () => {
    if(states.value){
        states.value.state('opened')
    }
    let timeout = 0
    if(props.data.timeout){
        timeout = props.data.timeout
    }

    Audios.sopen.play()
    setTimeout(()=>{
        dialog.value = true
        if(props.hidesmenu){
            HideMenu.value = true
        }
    }, timeout)

    
}
const close = () => {
    if(states.value){
        states.value.state('closed')
    }
    dialog.value = false
    Audios.sclose.play()
    if(props.hidesmenu){
        HideMenu.value = false
    }
}
</script>
<style lang="sass" scoped>

.blockDialog
    display: inline-block
    color: $dark
.ps
    width: 100%
    max-height: 80vh
    box-sizing: border-box
.dialog
    position: fixed
    width: 100vw
    height: 100vh
    top:0
    left: 0
    right: 0
    bottom:0 
    background: rgba(0,0,0,0.4)
    color: $main
    @include centerize
    text-align: left
    z-index: 99
    .dialog-content
        background: $clear
        @include floatcard
        position: relative
        min-width: 300px
        padding: 30px 0
        max-width: 80vw
    button.close
        position: absolute
        top: 2px
        right: 2px
        border-radius: 50%
        padding: 0
        width: 30px
        height: 30px
        font-size: 0.8
        background: transparent
        .material-icons
            font-size: 20px
        &:hover
            background: $clear
p
    color: $dark !important
strong
    color: $main !important

</style>