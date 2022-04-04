<template lang="pug">
.blockDragDrop#area
</template>
<script>
import {ref} from 'vue'

export default {
    components:{ },
    props:['data'],
    setup(props,context){
        const area = ref()
        const frame = new Frame("area", null, null, "#fff", '#333')
        frame.on("ready", function () {
            zog("READY!")
            var stage = frame.stage

            var bounds = new Boundary(0,0,frame.width,frame.height)

            var container = new Container()
            var circle = new Circle(40, red)
            var label = new Label({text: "g", align:CENTER})
            label.center(circle)
            container.addChild(circle)

            //DRAGGERS
            
            var draggers = new Tile({
                obj: [container],
                cols: 1,
                rows: 3,
                spacingH: 0,
                spacingV: 5,
            })
                .center().drag()
            

            stage.update()
        })

        return {
            area
        }
    }
}
</script>

<style lang="sass">
.blockDragDrop
    position: relative
    width: 100%
    min-height: 280px
</style>