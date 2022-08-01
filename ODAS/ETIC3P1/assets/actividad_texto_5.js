
var ejercio_5_contestado=0;

  $( "#actividad_texto_5" ).keyup(function() {
    contar_palabras_5();
  });

  function actividad_5_enviar(){
    if(!ejercio_5_contestado ){
     num_ejer_c++;
     $("#num_ejer_c").html(num_ejer_c);
     ejercio_5_contestado=1;
    }
    select_opcion('6')
}

function actividad_5_guardar(){
    if(!ejercio_5_contestado ){
     num_ejer_c++;
     $("#num_ejer_c").html(num_ejer_c);
     ejercio_5_contestado=1;
    }
    $("#pregunta_retro_5b").slideDown();
}


function contar_palabras_5(){
    $("#pregunta_retro_5a").slideUp();
    $("#pregunta_retro_5b").slideUp();
  textoArea = document.getElementById("actividad_texto_5").value;
  textoAreaDividido = textoArea.split(" ");
  numeroPalabras = textoAreaDividido.length;
  numeroPalabras--;
    $("#contador_palabras_5").html(numeroPalabras)
 

  if(numeroPalabras>29 && numeroPalabras<101){
    $('#pregunta_boton_5').slideDown();
    $('#pregunta_boton_5b').slideDown();
  }
  else{
    $('#pregunta_boton_5').slideUp();
    $('#pregunta_boton_5b').slideUp();
    if(numeroPalabras>100){
        $("#pregunta_retro_5a").slideDown();
    }
  }

}

contar_palabras_5();