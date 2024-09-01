function reiniciar ( px,  py, ancho, alto, resultado) {
  if (mouseX > px && mouseX < px + ancho && mouseY > py && mouseY < ancho + alto) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
function elraton( mouseX,  mouseY){
 if (frameCount/60 == 0){
 mouseX = 672;
 mouseY = 243;
 }
}
