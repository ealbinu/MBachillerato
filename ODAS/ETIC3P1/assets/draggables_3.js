function avanza_boton_3(){

    var xx = document.getElementsByClassName("draggable-4");
    if(xx.length<1){
        num_ejer_c++;
        $("#num_ejer_c").html(num_ejer_c);
        $('#pregunta_boton_3').slideDown();
    }
}

function dragables_3(){
    $('.draggable-4').draggable({ revert: true });  

    $('#drop_3_ira').droppable({  
        hoverClass: 'active',  
        accept: '#drag_3_ira',  
        drop: function(e, ui) {  
           $(this).html(ui.draggable.remove().html());  
           $(this).droppable('destroy');   
           avanza_boton_3(); 
        }  
    });  

    $('#drop_3_tristeza').droppable({  
        hoverClass: 'active',  
        accept: '#drag_3_tristeza',  
        drop: function(e, ui) {  
           $(this).html(ui.draggable.remove().html());  
           $(this).droppable('destroy');  
           avanza_boton_3();  
        }  
    });  

    $('#drop_3_miedo').droppable({  
        hoverClass: 'active',  
        accept: '#drag_3_miedo',  
        drop: function(e, ui) {  
           $(this).html(ui.draggable.remove().html());  
           $(this).droppable('destroy');  
           avanza_boton_3(); 
        }  
    });  

    $('#drop_3_alegria').droppable({  
       hoverClass: 'active',  
       accept: '#drag_3_alegria',  
       drop: function(e, ui) {  
          $(this).html(ui.draggable.remove().html());  
          $(this).droppable('destroy');
          avanza_boton_3();   

       }  
    });  

    $('#drop_3_sorpresa').droppable({  
        hoverClass: 'active',  
        accept: '#drag_3_sorpresa',  
        drop: function(e, ui) {  
           $(this).html(ui.draggable.remove().html());  
           $(this).droppable('destroy');   
           avanza_boton_3(); 
        }  
    });  

    $('#drop_3_asco').droppable({  
        hoverClass: 'active',  
        accept: '#drag_3_asco',  
        drop: function(e, ui) {  
           $(this).html(ui.draggable.remove().html());  
           $(this).droppable('destroy');   
           avanza_boton_3(); 
        }  
    });  
}

dragables_3();