function avanza_boton_4(){

    var xx = document.getElementsByClassName("draggable-5");
    if(xx.length<1){
        num_ejer_c++;
        $("#num_ejer_c").html(num_ejer_c);
        $('#pregunta_boton_4').slideDown();
    }
  
}

function limpia_retro_4(){
    $("#pregunta_retro_4a").slideUp();
    $("#pregunta_retro_4b").slideUp();
}

function dragables_4(){
    var myTimeout;

   $('.draggable-5').draggable({ 
    start: function( event, ui ) {
        audio["drop"].play();
    },
    revert: function(is_valid_drop){ 
        clearTimeout(myTimeout);
        myTimeout = setTimeout("limpia_retro_4()", 5000);

        $("#pregunta_retro_4a").slideUp();
        $("#pregunta_retro_4b").slideUp();
       
      if(!is_valid_drop){
        $("#pregunta_retro_4a").slideDown();
        audio["incorrecto"].play();
        return true;
      }
      else{
        audio["correcto"].play();
        $("#pregunta_retro_4b").slideDown();
      }
    
    }
   })
   
   $('#drop_4_miedo').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_miedo',  
    drop: function(e, ui) {  
      
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  


$('#drop_4_ira').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_ira',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_verguenza').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_verguenza',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_culpa').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_culpa',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  


$('#drop_4_admiracion').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_admiracion',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_indignacion').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_indignacion',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  



   $('#drop_4_sorpresa').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_sorpresa',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_ansiedad').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_ansiedad',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_compasion').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_compasion',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  

$('#drop_4_tedio').droppable({  
    hoverClass: 'active',  
    accept: '#drag_4_tedio',  
    drop: function(e, ui) {  
       $(this).html(ui.draggable.remove().html());  
       $(this).droppable('destroy');   
       avanza_boton_4(); 
    }  
});  





}

dragables_4();