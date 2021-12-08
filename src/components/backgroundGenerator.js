import GeoPattern from 'geopattern'


function buildBG(oda){
    var pattern = GeoPattern.generate(oda||'-')
    const backImg = pattern.toDataUrl()
    //document.getElementById('app').style.backgroundImage = backImg

    var style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = '#app {background-image: '+ backImg+';}'
    document.getElementsByTagName('head')[0].appendChild(style)
}




export default {buildBG}