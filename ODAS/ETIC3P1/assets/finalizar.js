var postm_estatus=""
var postm_results=""
var cadenaTempo="CADENArespuestas"

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function estatus_block(){
  cad=location.search;
   if(cad.indexOf("blocked")>0){
    $('button:contains("Finalizar")').slideUp();
    $(".pregunta").each(function() {
     $(this).attr('onclick','')
    
    });

    $(".draggable-5").each(function() {
      $(this).attr('class','draggable-5nd')
     
     });

    

    $("#sortable_3").attr('id','#sortable_3nd')

    $("#actividad_texto_5").attr("readonly","readonly")
    $("#actividad_texto_5").attr("style","background:#ccc;width:100%")
     
  }
}

function analiza_get(){
  estatus=getParameterByName("status")
  if(estatus){
    estatus=atob(estatus)
    estatus=estatus.split("_")
    es=estatus[0]

   setTimeout("select_opcion(es,1)",1000)
  }

  estatus_block();
}

analiza_get()

function envio_postmensaje_resultados(oks,por){
  total=13
  errors=total-oks
  oksPercentage=por
  errorsPercentage=100-por

  postm_results='"total":'+ total+',   "oks": '+oks+',    "errors": '+errors+',    "oksPercentage": '+oksPercentage+',    "errorsPercentage": '+errorsPercentage+'  '

 
  
}
function envio_postmensaje_seccion(o){

  o=o+"_"+cadenaTempo
  postm_estatus=btoa(o)
  window.top.postMessage('{"status": "'+postm_estatus+'","results": {'+postm_results+' }}')
  //window.top.postMessage('{"status": "cad","results": {"total": 26,   "oks": 12,    "errors": 14,    "oksPercentage": 46,    "errorsPercentage": 54  }}')
}

function finalizar(){
  xx=document.getElementById("num_ejer").innerHTML;
  x=xx-num_ejer_c;

  $("#finalizar_t").html(xx)
  $("#finalizar_c").html(x)


  $("#finalizar1_t").html(xx)

  click_finalizar()
}

function termiar_actividades(){
  aciertos=0;
  calificacion=12;
  var preguntas=[
    {id:2,correcta:'2c',valor:6},
    {id:'2a',correcta:'2ab',valor:6},
    {id:'2b',correcta:'2bd',valor:6},
    {id:'2c',correcta:'2ca',valor:6},
    {id:'2d',correcta:'2dc',valor:6}]
  
   var contestadas=[
  //  {id:3,valor:18},
    {id:4,valor:20},
  //  {id:5,valor:20},
  ]

  for(i=0;i<preguntas.length;i++){
    id_pregunta=preguntas[i].id;
    id_correcta=preguntas[i].correcta;
    a=document.getElementById("pregunta_"+id_correcta).classList;

    if(a[1]=="pregunta_correcta"){
      $('#finalizar1_pregunta_'+id_pregunta).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_c');
      calificacion+=preguntas[i].valor;
      $('#finalizar_puntos_'+id_pregunta).html(preguntas[i].valor+" / "+preguntas[i].valor)
      aciertos++
    }
    else{
      $('#finalizar1_pregunta_'+id_pregunta).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_i');
      $('#finalizar_puntos_'+id_pregunta).html("0 / "+preguntas[i].valor)
   }
  }

  for(i=0;i<contestadas.length;i++){
    id=contestadas[i].id;
    a=document.getElementById("pregunta_boton_"+id).style.display

    if(a=='none'){
      $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_i');
      $('#finalizar_puntos_'+id).html("0 / "+contestadas[i].valor)
    }
    else{
      $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_c');
      calificacion+=contestadas[i].valor;
      aciertos++
      $('#finalizar_puntos_'+id).html(contestadas[i].valor+" / "+contestadas[i].valor)
    }
  }


  ///actividad FAMILIA DE EMOCIONES ORDENACION

  id=3
  conteo=0
  num=1
  valor=3
  tot=18
  $("#sortable_"+id).find('li').each(function(j, li){
    idx=li.id;
    ids=idx.split("_");
    ida=ids[3]
    if(ida==num){
      conteo++
      li.style.background='rgba(0,255,0,0.7)';
      aciertos++
    }
    else
      li.style.background='rgba(255,0,0,0.7)';
  
      num++
  })
    if(conteo>0)
      $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_c');
    else
      $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_i');
      tota=conteo*valor;
    calificacion+=tota
    $('#finalizar_puntos_'+id).html(tota+" / "+tot)


  ///actividad Manejo de emociones TEXTO
  texto=document.getElementById("actividad_texto_5").value;
  const words= ['rabia','enojo','resentimiento','furia','exasperación','indignación','animosidad','irritabilidad','hostilidad','odio','asombro','desconcierto','admiración. desprecio','desdén','displicencia','aversión','antipatía','disgusto','repugnancia','empatía','empáticos','amabilidad','amables','tolerancia','tolerantes','respeto','respetuosos','solidaridad','solidarios']
  conteo=0;
  valor=20;
  id=5;
  for(i=0;i<words.length;i++){
    if(texto.includes(words[i]))
      conteo++;
  }

  if(conteo>3){
    $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_c');
    calificacion+=valor;
    aciertos++
    $('#finalizar_puntos_'+id).html(valor+" / "+valor)
  }
  else{
    $('#finalizar1_pregunta_'+id).attr('class','div_cuadro_finalizar1 div_cuadro_finalizar_i');
    $('#finalizar_puntos_'+id).html("0 / "+valor)
  }


  $("#puntaje").slideDown();
  $("#puntaje_l").html("&nbsp;Puntaje: "+calificacion+ "%");

   $("#finalizar1_c").html(calificacion+ " / 100")
   envio_postmensaje_resultados(aciertos,calificacion)
  select_opcion(7)
 
}

function click_reiniciar(){
  window.location='index.html';
}

function click_finalizar(){

  var xx = document.getElementsByClassName("div_cuadro_finalizar");
for(i=0;i<xx.length;i++){
  
idx=xx[i].id;
ids=idx.split("_");
id=ids[2]

a=document.getElementById("pregunta_boton_"+id).style.display

if(a=='none'){
  $('#'+xx[i].id).attr('class','div_cuadro_finalizar div_cuadro_finalizar_w');
}
else{
  $('#'+xx[i].id).attr('class','div_cuadro_finalizar div_cuadro_finalizar_x');
}
 }

}

$("#puntaje").slideUp(1);



setInterval("finalizar()",5000)