<template>
    <template v-if="simstate == 0">
        
        <div>
            <BlocksRenderer :item="{'class':'h4 text-center text-dark', 'text': '¡Bienvenido! En esta práctica utilizarás los siguientes materiales y equipos.'}" blockid="sim1t"></BlocksRenderer>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/1.json', 'loop': false}" blockid="sim1"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate==1">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/2.json', 'loop': false}" blockid="sim2"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 2">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/3.json', 'loop': false}" blockid="sim3"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 3">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/4.json', 'loop': false}" blockid="sim4"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 4">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/5.json', 'loop': false}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 5">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/6.json', 'loop': false}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 6">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/7.json', 'loop': false}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 7">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/8.json', 'loop': false}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate==8">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/9.json', 'loop': false}" blockid="sim2"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 9">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/10.json', 'loop': false}" blockid="sim3"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 10">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/11.json', 'loop': false}" blockid="sim4"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 11">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/12.json', 'loop': false}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 12">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/13.json', 'loop': false}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 13">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/14.json', 'loop': false}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 14">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/15.json', 'loop': false}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 15">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/16.json', 'loop': false}" blockid="sim6"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="siguiente" v-if="nextBtn">Siguiente</div>
        </div>
    </template>
    <template v-else-if="simstate == 16">
        <div>
            <BlocksRenderer @completed="nextBtn=true" :item="{'lottie': 'sim/17.json', 'loop': false}" blockid="sim5"></BlocksRenderer>
        </div>
        <div class="text-center">
            <div class="btn" @click="reiniciar" v-if="nextBtn">Reiniciar</div>
        </div>
    </template>


</template>
<script setup>

import {ref, inject} from 'vue'


const nextBtn = ref(false)
const Activity = inject('activityFile')

const simstate = ref(0)
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






