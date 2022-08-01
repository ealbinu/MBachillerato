function  crear_paginado(id,num){

  q=id[0]
  letras=['','','a','b','c','d','e','f']
  cad=''
  cad+='<div class="fixed p-1 bg-white rounded bottom-1 left-4 lg:left-60 right-7">';
  cad+='<div class="btn-group justify-center">';
  sig=''
  ant=''
  act=''
   if(!id[1]){
    act='btn-disabled'
    sig=q+'a'
  }

  else{
    x=letras.indexOf(id[1])
    x--
    ant=q+letras[x]
  }

  cad+='  <button onclick=select_opcion("'+ant+'") class="btn btn-xs '+act+'">';
  cad+='    <i class="material-icons theicon" style="color:#fff">navigate_before</i><span>Anterior</span>';
  cad+='  </button>';
  

  for(i=1;i<=num;i++){
    act=''
    nom=q+letras[i]
    if(nom==id)
      act='btn-active'
   
    cad+='<button class="btn btn-xs '+act+'" onclick=select_opcion("'+nom+'") >'+i+'</button>';
  
  }

  
  if(id[1]){
    x=letras.indexOf(id[1])
    x++
    sig=q+letras[x]
  }

  act=''
  if(nom==id)
   act='btn-disabled'
    
  cad+='  <button onclick=select_opcion("'+sig+'") class="btn btn-xs '+act+'">Siguiente<i style="color:#fff" class="material-icons theicon">navigate_next</i></button>';
  cad+='</div>';
  cad+='</div>';
  document.getElementById('paginado_'+id).innerHTML=cad;

}