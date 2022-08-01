var numero_rotativo=0

function avanza_rotativo(){
  

   n=numero_rotativo%4
   $("#hola").html(n+" "+numero_rotativo)

   $("#rotativo_"+n).fadeIn(1000).delay(3000).fadeOut(1000)

   
   numero_rotativo++

}

function inicia_rotativo(){
 
   num=0
  $(".ActBG").each(function( index ) {
      if(num>0)
         $(this).fadeOut(10)
      $(this).attr("id","rotativo_"+num)
      $(this).attr("style","position:absolute")
   
      num++
    })

   setInterval("avanza_rotativo()",3000)
}

inicia_rotativo()