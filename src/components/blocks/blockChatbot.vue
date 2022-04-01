<template lang="pug">


div.w-full.text-center
    .mockup-window.border.bg-slate-500
        .flex.justify-end.flex-col.px-4.bg-white.text-dark(class="h-[34rem]")
            perfect-scrollbar(ref="scroll").h-full.w-full.flex.flex-col.justify-between
                template(v-for="(i, index) in chattalk")

                    //-bot
                    .bubble.bot.flex.justify-start.items-center.my-1.text-left.animate__animated.animate__fadeInUp.animate__faster
                        img(src="/odas/assets/icons/chatbot-bot.svg").w-12.mask.mask-squircle
                        div.bg-gray-100.py-2.px-2.ml-1.rounded-xl.max-w-lg(:class="[findTalk(i.talk).class]")
                            BlocksRenderer(:item="findTalk(i.talk).talk" :blockid="blockid+'-chatbot-bot-'+index")
                            
                    //-user
                    .bubble.user.flex.justify-end.items-center.my-1.text-left(v-if="i.answer > -1" ).animate__animated.animate__fadeInUp.animate__faster
                        div.bg-primary.text-white.py-2.px-2.mr-1.rounded-xl.max-w-lg(:class="[ (i.isright!=null && Status.finalize ? (i.isright?'isok':'notok') : 'notevaluated'), 'min-w-[4rem]' ]").text-center
                            BlocksRenderer(:item="findAnswer(i)" :blockid="blockid+'-chatbot-user-'+index")
                        img(src="/odas/assets/icons/chatbot-user.svg").w-12.mask.mask-squircle

                    //-userinput
                    .bg-red-400.rounded.my-2.w-full.p-2(v-if="findTalk(i.talk).options && currentTalk == i.talk && chattalk.length-1 == index").userinputbubble
                        .userinput.flex.flex-wrap.justify-end.w-full.gap-1(v-if="findTalk(i.talk).options && i.talk==currentTalk")
                            template(v-for="(iOp, indexOp) in findTalk(i.talk).options")
                                div(@click="userinput(i.talk, indexOp, iOp)").btn.bg-primary.btn-sm.animate__animated.animate__pulse.animate__infinite.animate__slow.normal-case
                                    BlocksRenderer(:item="iOp[0]" :blockid="blockid+'-chatbot-userinput-'+indexOp")
                    
                    
                .my-2.w-full.px-2.py-4(v-if="ended").userinputbubble
                    .btn.btn-accent.btn-wide.animate__animated.animate__pulse.animate__infinite.animate__slow.my-2(@click="nextScreen") Siguiente


                //-bot writing
                template(v-if="writing")
                    .bubble.bot.flex.justify-start.items-center.my-1.text-left
                        img(src="/odas/assets/icons/chatbot-bot.svg").w-12.mask.mask-squircle
                        div.bg-gray-100.py-2.px-1.ml-1.rounded-xl.max-w-md
                            img(src="/odas/assets/icons/chatbot-writing.gif")
               
// p {{Status.answers[blockid]}}

</template>
<script setup>
import {ref, inject, getCurrentInstance, watch, reactive, watchEffect} from 'vue'
import BlocksRenderer from '../BlocksRenderer.vue';

const Audios = inject('Audios')
const Status = inject('statusFile')
const currentInstance = getCurrentInstance()
const Blocked = inject('blocked')

const props = defineProps({
    data: Object,
    blockid: String
})

const ended = ref(false)
const wrongs = ref(0)


const scroll = ref()
const chattalk = reactive([])
const writing = ref(false)
const currentTalk = ref(0)

const addTalk = (id) => {
    currentTalk.value = id
    writing.value = true

    setTimeout(()=>{
        writing.value = false
        chattalk.push({talk:id, answer:-1})
        Audios.snotification.play()        
        autoTalk(id)
        storeInStatusFile()
        endTalk(id)
        scrollbarTop()

    }, (Math.random()*1000)+400)
}



const findTalk = (id) => {
    const items = props.data.content
    const item = items.find(talk => talk.id == id)
    return item
}

const findAnswer = (item) => {
    return findTalk(item.talk).options[item.answer][0]
}

const addTalkAnswer = (talkId, answerId, isright) => {
    const items = chattalk
    const item = items.find(it => it.talk == talkId)
    item.answer = answerId
    if(isright!=null){
        item.isright = isright
    }
    if(isright===false){
        wrongs.value +=1
    }
}


const autoTalk = (talkId) => {
    const talk = findTalk(talkId)
    if(talk.auto){
        addTalk(talk.auto)
    }
}

const endTalk = (talkId) => {
    const talk = findTalk(talkId)
    if(talk.end){
        ended.value = true
    }
}




const scrollbarTop = () => {
    
    if(scroll.value){
        setTimeout(()=>{
            try{
                //scroll.value.$el.lastChild.scrollIntoView()
                scroll.value.$el.scrollTop = scroll.value.$el.scrollHeight
            } catch {
                console.log('couldnt scroll')
            }
        }, 1200)
        setTimeout(()=>{
            try{
                scroll.value.$el.scrollTop = scroll.value.$el.scrollHeight
            } catch { }
        }, 100)
    }
}



const userinput = (talkId, optionId, selectedItem) => {
    if(Blocked){
        return false
    }
    if(Status.value.finalize){
        return false
    }
    addTalkAnswer(talkId, optionId, selectedItem[2])
    addTalk(selectedItem[1])
    Audios.ssend.play()
}

const nextScreen = () => {
    Status.value.screen += 1
}

const init = () => {

    /*
    if(!Status.value.answers){
        Status.value.answers = {}
    }*/
    if(Status.value.answers[props.blockid]){
        //chattalk = Status.value.answers[props.blockid][0]
        Object.assign(chattalk, Status.value.answers[props.blockid][0])
        currentTalk.value = Status.value.answers[props.blockid][1]
        ended.value = Status.value.answers[props.blockid][2]
        wrongs.value = Status.value.answers[props.blockid][3]

        const lastItm = chattalk.pop();
        addTalk(lastItm.talk)
        scrollbarTop()

    } else {
        Status.value.answers[props.blockid] = null
        addTalk(0)
    }
}
init()


/*

watchEffect(() => {
  // works for reactivity tracking
  scrollbarTop()
})
*/



const storeInStatusFile = () => {

    Status.value.answers[props.blockid] = [chattalk, currentTalk.value, ended.value, wrongs.value]
}


const finalize = () => {
    //check for wrongs
    if(wrongs.value == 0){
        Status.value.result[props.blockid] = ended.value
    } else {
        Status.value.result[props.blockid] = false
    }
}

currentInstance.appContext.config.globalProperties.emitter.on('finalize', (evt) => {
    finalize()
})


</script>