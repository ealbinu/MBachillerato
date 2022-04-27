
//import BlockLottie from '../components/blocks/blockLottie.vue';
import BlocksRenderer from '../components/BlocksRenderer.vue';

export default {
    install: (app, options) => {
        app.component('BlocksRenderer', BlocksRenderer)
    }
}