

function confirmacion() {
  var respuesta=confirm("¿Desea enviar este formulario?");
  if (respuesta ==true) {
    respuesta=confirm("El mensaje ha sido enviado");
    
    return true
  }else{
    return false
  }
  
}