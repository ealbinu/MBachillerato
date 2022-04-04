<template lang="pug">
perfect-scrollbar: .theform
    .row
        .field ID:
            input(v-model="data.id")
        .field Programa:
            label 
                input(v-model="data.programa" placeholder="programa" type="radio" value="DGETI")
                span DGETI
            label
                input(v-model="data.programa" placeholder="programa" type="radio" value="DGB")
                span DGB 
    .row
        .field Asignatura:
            input(v-model="data.asignatura")
    .field Titulo:
        input(v-model="data.title")
    .field Aprendizajes:
        input(v-model="data.aprendizajes")
    .field Contenido_central:
        input(v-model="data.contenidocentral")
    div(v-if="data.screens")
        .field.in Screens ({{data.screens.length}}):
            button(@click="addScreens").add: Icon library_add
        .inner(v-for="(i, index) in data.screens")
            button(@click="removeScreens(index)").rm: Icon backspace
            .field Título: 
                input(v-model="i.title")
            .field Icono: 
                input(v-model="i.icon")
            .field Steps: 
                input(v-model="i.steps" type="checkbox")
            .field End: 
                input(v-model="i.end" type="checkbox")
            div(v-if="i.blocks")
                .field.in Blocks ({{i.blocks.length}}):
                    button(@click="addBlocks(index)" :key="'addblock'+index").add: Icon library_add
                .inner(v-for="(i2, index2) in i.blocks")
                    button(@click="removeBlocks(index, index2)").rm: Icon backspace
                    .field Width: 
                        input(v-model="i2.width")
                    div
                    .field.in Content ({{i2.content.length}}):
                        button(@click="addContent(index, index2,'simple')").add Simple
                        button(@click="addContent(index, index2,'text')").add Text
                        button(@click="addContent(index, index2,'math')").add Math
                        button(@click="addContent(index, index2,'term')").add Term
                        button(@click="addContent(index, index2,'img')").add Img
                        button(@click="addContent(index, index2,'br')").add br
                        button(@click="addContent(index, index2,'dragdrop')").add dragdrop
                        button(@click="addContent(index, index2,'select')").add select
                    .inner(v-for="(i3, index3) in i2.content")
                        button(@click="removeContent(index, index2, index3)").rm: Icon backspace
                        template(v-if="typeof i2.content[index3]=='string'")
                            .field.multi Simple: 
                                input(v-model="i2.content[index3]")
                        template(v-else)
                            template(v-for="(iField, indexField) in i3")
                                .field.multi {{indexField}}
                                    template(v-if="typeof i2.content[index3][indexField] == 'string'")
                                        input(v-model="i2.content[index3][indexField]")
                                    template(v-else)
                                        template(v-for="(iField2, indexField2) in i2.content[index3][indexField]")
                                            .field {{indexField2}}
                                                //input(v-model="i2.content[index3][indexField][indexField2]")
                                                //Vue3JsonEditor(v-model="i2.content[index3][indexField][indexField2]" :show-btns="false" )
                                                
perfect-scrollbar: div.thedata
    .BuilderBar
        button(@click="builderbar = 'json'"): Icon code
        button(@click="builderbar = 'play'"): Icon ondemand_video
        button(@click="builderbar = 'import'"): Icon sync_problem
    template(v-if="builderbar=='json' && data")
        vue-json-pretty(:data="data" :show-length="true" :show-line="true" :show-select-controller="true" @click="copydata")
    template(v-else-if="builderbar=='play'")
    template(v-else-if="builderbar=='import'")
        textarea(v-model="importData" @change="replaceData" placeholder="Import json")
</template>

<script setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import {ref} from 'vue'
import Icon from './icon.vue'




const props = defineProps({})
const importData = ref(null)
const builderbar = ref('json')
//- ----- blocks list ----
const blockText = {text: "", class: ""}
const blockMath = { math:"", size: "2rem"}
const itemContent = {
    simple: "",
    text: blockText,
    math: blockMath,
    term: {term:1, t: "", d: ""},
    img: { img:"" },
    dragdrop: { 
        dragdrop:true,
            drags: [
                [blockMath, "val"]
            ],
            dropsLeft:[["Titulo", "val"]],
            dropsRight:["Titulo", "val"],
    },
    select: {
        select: true,
        options: [
            [blockMath, false],
            [blockMath, true],
        ]
    },
    br: {br:1},
    br: {br:1},

}
            //- ----- / blocks list ----

const itemBlock = {
    width: '100%',
    content: []
}
const itemScreen = {
            title: "",
            icon: "",
            steps: true,
            end: false,
            blocks:[itemBlock]
        }
const data = ref({
    id:"",
    programa: "DGETI",
    materia: "",
    asignatura: "",
    title: "",
    aprendizajes: "",
    contenidocentral: "",
    screens: [ 
        JSON.parse(JSON.stringify(itemScreen)),
        {
            title: 'Finalizar',
            icon: 'flag',
            end: true,
            content: []
        }
        
        ]
})


const addScreens = () => {
    const item = JSON.parse(JSON.stringify(itemScreen))
    data.value.screens.push(item)
}
const addBlocks = (index) => {
    const item = JSON.parse(JSON.stringify(itemBlock))
    data.value.screens[index].blocks.push(item)
}
const addContent = (indexScreen, indexBlocks, type) => {

    const item = JSON.parse(JSON.stringify(itemContent[type]))

    data.value.screens[indexScreen].blocks[indexBlocks].content.push(item)
}

const removeScreens = (indexScreen) => {
    data.value.screens.splice(indexScreen, 1)
}
const removeBlocks = (indexScreen, indexBlocks) => {
    data.value.screens[indexScreen].blocks.splice(indexBlocks, 1)
}
const removeContent = (indexScreen, indexBlocks, indexContent) => {
    data.value.screens[indexScreen].blocks[indexBlocks].content.splice(indexContent, 1)
}


const replaceData = () => {
    const imported = JSON.parse(importData.value)
    importData.value = ""

    data.value = imported
}

const copydata = () => {
    navigator.clipboard.writeText(JSON.stringify(data.value, null, '\t'))
}

</script>

<style lang="sass" scoped>
.ps
    width: 50%
.row
    gap: 8px
.theform, .thedata
    width: 95%

.theform
    padding: 10px
    .field
        background: #fff
        display: block
        color: $high
        display: flex
        padding: 4px
        margin: 4px 0
        box-shadow: 0 8px 10px rgba(0,0,0,0.1)
        border-radius: 4px
        align-items: center
        width: 100%
        font-size: 0.7rem
        label
            display: flex
            align-items: center
            width: 50%
            color: $main
            margin-left: 10px
        &>input
            padding: 6px
            border: none
            border-bottom: solid 1px $main 
            width: 90%
            margin-left: auto
            font-size: 0.8rem
        &.in
            font-weight: bold
            border-left: 2px dashed $main
        &.multi:nth-child(2)
            font-weight: bold
            background: $accent
            color: $clear !important
    button.add
        border: 2px dashed $high
        margin-left: 2px
        padding: 4px
    .inner
        display: flex
        flex-direction: column
        border-left: 4px solid $light
        padding-left: 4px
        margin: 8px 0
        border-top: 2px solid $light
        border-bottom: 2px solid $light
        button.add
            border: 2px dashed $test

        .field
            color: $accent
        button.rm
            background: $accent
            transform: scale(0.7)
        .inner

            border-color: $test
            button.add
                border: 2px dashed $accent
            .field
                color: $test
            button.rm
                background: $test
            .inner
                border-color: $accent
                .field
                    color: $accent
                button.rm
                    background: $accent
    .rm
        margin-left: auto

</style>