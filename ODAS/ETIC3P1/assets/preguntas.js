var intentos_pregunta=[]

function click_pregunta(pregunta,opcion,correcta){

  
  asci=pregunta.charCodeAt(0)
  if(pregunta[1])
  asci+=pregunta.charCodeAt(1)

  

  if(intentos_pregunta[asci]<3){
    intentos_pregunta[asci]++


  $('#pregunta_'+pregunta+'a').attr('class','pregunta');
  $('#pregunta_'+pregunta+'b').attr('class','pregunta');
  $('#pregunta_'+pregunta+'c').attr('class','pregunta');
  $('#pregunta_'+pregunta+'d').attr('class','pregunta');

  $('#pregunta_retro_'+pregunta+'a').slideUp();
  $('#pregunta_retro_'+pregunta+'b').slideUp();
  $('#pregunta_retro_'+pregunta+'c').slideUp();
  $('#pregunta_retro_'+pregunta+'d').slideUp();

  if(correcta==0)
    cla='pregunta pregunta_incorrecta'

  if(correcta==1){
    cla='pregunta pregunta_correcta'
    intentos_pregunta[asci]=10
  }


    if($('#pregunta_boton_'+pregunta).is(":hidden")){
      num_ejer_c++;
      $("#num_ejer_c").html(num_ejer_c)
    }



   $('#pregunta_'+pregunta+opcion).attr('class',cla);
   $('#pregunta_boton_'+pregunta).slideDown();
   $('#pregunta_retro_'+pregunta+opcion).slideDown();
  }

  if(intentos_pregunta[asci]>2 && intentos_pregunta[asci]<10){
    $('#pregunta_marca_'+pregunta).slideDown();
  }

}

function tipo_preguntas(pregunta){
  asci=pregunta.charCodeAt(0)
  if(pregunta[1])
  asci+=pregunta.charCodeAt(1)

  intentos_pregunta[asci]=0

  $('#pregunta_retro_'+pregunta+'a').slideUp();
  $('#pregunta_retro_'+pregunta+'b').slideUp();
  $('#pregunta_retro_'+pregunta+'c').slideUp();
  $('#pregunta_retro_'+pregunta+'d').slideUp();

  $('#pregunta_marca_'+pregunta).slideUp();
  $('#pregunta_boton_'+pregunta).slideUp();

  num_ejer++;
}


tipo_preguntas('2');
tipo_preguntas('2a');
tipo_preguntas('2b');
tipo_preguntas('2c');
tipo_preguntas('2d');
tipo_preguntas('3');
tipo_preguntas('4');
tipo_preguntas('5');