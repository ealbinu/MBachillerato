var audio = {};
audio["menu"] = new Audio();
audio["menu"].src = "assets/sonidos/menu.mp3"

audio["ficha"] = new Audio();
audio["ficha"].src = "assets/sonidos/ficha.mp3"

audio["pop"] = new Audio();
audio["pop"].src = "assets/sonidos/pop.mp3"

audio["closepop"] = new Audio();
audio["closepop"].src = "assets/sonidos/closepop.mp3"

audio["correcto"] = new Audio();
audio["correcto"].src = "assets/sonidos/correcto.mp3"

audio["incorrecto"] = new Audio();
audio["incorrecto"].src = "assets/sonidos/incorrecto.mp3"

audio["nada"] = new Audio();
audio["nada"].src = "assets/sonidos/nada.mp3"

audio["drop"] = new Audio();
audio["drop"].src = "assets/sonidos/drop.mp3"

audio["siguiente"] = new Audio();
audio["siguiente"].src = "assets/sonidos/siguiente.mp3"

audio["finalizar"] = new Audio();
audio["finalizar"].src = "assets/sonidos/finalizar.mp3"

audio["reiniciar"] = new Audio();
audio["reiniciar"].src = "assets/sonidos/reiniciar.mp3"

$(".ml-1").click(function() {
    audio["menu"].play();

  });

 
  $( '.pregunta' ).click(function() {

     clase=$(this).attr("class")
    if(clase.indexOf("_correcta")>1)
        audio["correcto"].play();
    
    else if(clase.indexOf("_incorrecta")>1)
        audio["incorrecto"].play();
    else
        audio["nada"].play();
  });

  $( 'a[rel*="modal:open"]' ).click(function() {
    hrf=$(this).attr("href");
    if(hrf=='#exFicha')
        audio["ficha"].play();
    else
        audio["pop"].play();
  });

  $(".btn-accent").click(function() {
    x=$(this).html()
   if(x=='Finalizar')
        audio["finalizar"].play();
   else  if(x=='Reiniciar')
   audio["reiniciar"].play();
   else
     audio["siguiente"].play();
  });
  
  $(".btn-xs").click(function() {
    audio["siguiente"].play();
  });


  $(".div_cuadro_finalizar").click(function() {
    audio["menu"].play();
  });
 
  $(".div_cuadro_finalizar1").click(function() {
    audio["menu"].play();
  });

 
  function click_reiniciar(){
    audio["reiniciar"].play();
    setTimeout("window.location='index.html'",1000)
  }

