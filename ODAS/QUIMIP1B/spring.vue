<template>
    <div>SPRING SIMULATION</div>
    <div id="springcanvas">Sprcanvas</div>
</template>
<script setup>

import {ref, inject, onMounted} from 'vue'

onMounted(() => {
    let myScript = document.createElement("script");
    myScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js");
    document.body.appendChild(myScript);

    function setup() { 
        var canvas = createCanvas(400, 400);
        canvas.parent("springcanvas")
    } 

    function draw() { 
        background(220);
    }

})




</script>
<style>

</style>






