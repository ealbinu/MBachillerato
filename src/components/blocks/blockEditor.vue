<template lang="pug">

.blockEditor.card.bg-white.border-4.border-solid.border-slate-500(
    :class="[ data.class]"
    :id="data.id"
    ref="block"
    ).animate__animated
    
    p {{Status.finalize}}
    template(v-if="!Blocked && !Status.finalize")
        .blockEditorOptions.grid.gap-1.items-center.grid-flow-col
            template(v-for="(i, index) in data.imgs")
                .card.bg-white.shadow-xl.cursor-pointer(@click="insertarImg(i.img)")
                    .card-body.p-2
                        BlocksRenderer(:item="i" :blockid="blockid+'-editor-option-'+index")
        
    div(:id="blockid+'-editor'").card-body.text-black
    
</template>
<script setup>
import {ref, inject, getCurrentInstance} from 'vue'

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Paragraph from 'editorjs-paragraph-with-alignment';

import BlocksRenderer from '../BlocksRenderer.vue';

const Audios = inject('Audios')
const Activity = inject('activityFile')
const Status = inject('statusFile')
const Blocked = inject('blocked')
const result = ref(null)
const block = ref()
const currentInstance = getCurrentInstance()
const editor = ref()



const insertarImg = (img) => {
    var imageUrl = 'odas/'+Activity.id+'/'+img
    editor.value.blocks.insert("image", {url:imageUrl})
}

const editori18n = {
    messages: {
        ui: {
            "inlineToolbar": { "converter": { "Convert to": "Convertir en" } },
            "toolbar": { "toolbox": { "Add": "Añadir" } },
            "blockTunes": { "toggler": { "Click to tune": "Click para seleccionar", "or drag to move": "o arrastrar para mover" } }
        },
        blockTunes: {
            "delete": { "Delete": "Eliminar" },
            "moveUp": { "Move up": "Mover arriba" },
            "moveDown": { "Move down": "Mover abajo" }
        },
        toolNames: {
            "Text": "Texto", "Heading": "Encabezado",
            "List": "Lista", "Warning": "Alerta",
            "Quote": "Cita", "Code": "Código",
            "Link": "Vínculo", "Bold": "Negrita", "Italic": "Itálica"
        },
        tools: {
            "image":{
                "Enter a caption": "Pie de imagen"
            }
        }
    }
}

const init = () => {
    //Init

    var readonlyState = false
    var dataState = {}
    
    //Readonly
    if(Status.value.finalize || Blocked){
       readonlyState = true
    }
    
    
    // Load answers
    if(Status.value.answers[props.blockid]){
        if(Status.value.answers[props.blockid].blocks.length){
            dataState = Status.value.answers[props.blockid]
        }
    } else {
        Status.value.answers[props.blockid] = null
    }
    editor.value = new EditorJS({
        readOnly: readonlyState,
        data: dataState,
        placeholder: 'Escribe aquí tu texto',
        holder: props.blockid+'-editor',
        tools: {
            header: Header,
            image: SimpleImage,
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            }
        },
        i18n: editori18n,
        onChange: () => {
            editor.value.save().then(res=>{
                Status.value.answers[props.blockid] = res
                if(res.blocks.length>1){
                    result.value = res.blocks.length>0
                }
            })
        }
    })
}

init()

const tooltip = ref(false)

const props = defineProps({
    data: Object,
    blockid: String
})

const finalize = () => {
    block.value.classList.add(result.value?'isok':'notok')
    Status.value.result[props.blockid] = result.value
    editor.value.readOnly.toggle()
}

currentInstance.appContext.config.globalProperties.emitter.on('finalize', (evt) => {
    finalize()
})




</script>

<style lang="sass">
.blockEditor
    .ce-block__content
        background: #f5f5f5
        margin-bottom: 4px
        border-radius: 4px
        h1
            font-size: 2rem
        h2
            font-size: 1.8rem
        h3
            font-size: 1.6rem
        h4
            font-size: 1.4rem
        h5
            font-size: 1.2rem
        h6
            font-size: 1rem
    .cdx-simple-image__caption
        display: none
</style>