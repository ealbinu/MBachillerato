import GeoPattern from 'geopattern'


function buildBG(oda){
    var pattern = GeoPattern.generate(oda||'-')
    const backImg = pattern.toDataUrl()
    document.getElementById('app').style.backgroundImage = backImg
}

export default {buildBG}