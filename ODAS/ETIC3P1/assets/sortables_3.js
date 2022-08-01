$( "#sortable_3" ).sortable({
  containment: "parent",
  stop: function( event, ui ) { audio["drop"].play();},
  activate: function( event, ui ) {
    if(ejercicio_3_realizado==0){
      num_ejer_c++;
      $("#num_ejer_c").html(num_ejer_c)
      ejercicio_3_realizado=1;
      $("#pregunta_boton_3").slideDown();
     
    }
  }
 
});

var ul = document.querySelector('#sortable_3');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}