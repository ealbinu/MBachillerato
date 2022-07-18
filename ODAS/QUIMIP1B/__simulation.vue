<template>
    <template v-if="simstate == 0">
        
        <div>
            <BlocksRenderer :item="{'class':'h4 text-center text-dark', 'text': '¡Bienvenido! En esta práctica utilizarás los siguientes materiales y equipos.'}" blockid="sim1t"></BlocksRenderer>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/1.json',  'segment': [0, 400]}" blockid="anim1"></BlocksRenderer>
        </div>
        <div class="text-center" >
            <button class="btn" @click="siguiente" :disabled="nextBtn === false">Siguiente</button>
        </div>
    </template>
    <template v-else-if="simstate==1">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/2.json', 'segment': [0, 230] }" blockid="anim2"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn btn-ghost btn-sm mr-2" @click="anterior">Anterior</div>
            <button class="btn" @click="siguiente" :disabled="nextBtn === false">Siguiente</button>
        </div>
    </template>
    <!-- INPUT: MARCAR TUBO #################################### -->
    <template v-else-if="simstate == 2">
        
        <div class="grid grid-cols-2">
            <div>
                <BlocksRenderer  :item='{ drag:1, "content": [ {img:"sim/marcador.svg", class:"w-16 mx-auto"} ], "bounds": "#screen-3", "class": "max-w-[10rem] text-center mx-auto bg-transparent", "dropzone": ".drop", "correctId": "#inp1-drop" }' blockid="3-0-1"  @completed="nextBtn=true"></BlocksRenderer>
            </div>
            <div id="inp1-drop" class="text-center drop"><BlocksRenderer :item="{img:'sim/tubo-vacio.svg'}"></BlocksRenderer></div>
        </div>
        <div class="text-center">
            <div class="btn btn-ghost btn-sm mr-2" @click="anterior">Anterior</div>
            <button class="btn" @click="siguiente" :disabled="nextBtn === false">Siguiente</button>
        </div>
    </template>
    <!-- ANIM: MARCAR TUBOS #################################### -->
    <template v-else-if="simstate == 3">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/3.json', 'segment': [0, 70] }" blockid="sim3"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>

    <!-- ANIM: LLENAR DE AGUA -->
    <template v-else-if="simstate == 4">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/3.json', 'segment': [90, 360] }" blockid="sim3"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>

    <!-- 

    <template v-else-if="simstate == 3">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/4.json', 'segment': [0, 400] }" blockid="sim4"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 4">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,  'lottie': 'sim/5.json', 'segment': [0, 400] }" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 5">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf, 'lottie': 'sim/6.json', 'segment': [0, 400]}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 6">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/7.json', 'segment': [0, 400] }" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 7">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/8.json', 'segment': [0, 400] }" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate==8">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/9.json', 'segment': [0, 400] }" blockid="sim2"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 9">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/10.json', 'segment': [0, 400] }" blockid="sim3"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 10">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/11.json', 'segment': [0, 400] }" blockid="sim4"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 11">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/12.json', 'segment': [0, 400] }" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 12">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/13.json', 'segment': [0, 400] }" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 13">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/14.json', 'segment': [0, 400] }" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 14">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/15.json' }" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 15">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/16.json' }" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 16">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{...lottieConf,'lottie': 'sim/17.json'}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="reiniciar" v-if="nextBtn">Reiniciar</div>
        </div>
    </template>


     -->


</template>
<script setup>

import {ref, inject} from 'vue'


const lottieConf = {
    'loop': false,
    'autoplay': false,
    'speed': 10
}

const nextBtn = ref(false)
const Activity = inject('activityFile')

const simstate = ref(2)

const anterior = () => {
    nextBtn.value = true
    simstate.value -= 1
}
const siguiente = () => {
    nextBtn.value = false
    simstate.value += 1
}
const reiniciar = () => {
    nextBtn.value = false
    simstate.value = 0
}




</script>
<style>
.sumando{
    background: #ffdd00;
}
</style>






