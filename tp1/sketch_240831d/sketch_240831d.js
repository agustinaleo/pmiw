//Agustina León
//tp1
//comisión 1
//https://youtu.be/yBXtXLZLrjg
let ilusion;
let mas = 400;
let lug;
let fond;
let resultado;

function preload() {
  ilusion =loadImage("data/ilusion.jpg");
}

function setup(){
  createCanvas(800,400);
  ilusion.resize(400, 400);
  lug = width/mas;
  fond= 10;
  rectMode(CENTER);
  ilusion = loadImage("ilusion.jpg");
  
}
function draw(){
  background(fond);
  image(ilusion,0,0,400,400);
  //println( mouseX,  mouseY );
  //println (frameCount /60);
  //elraton(mouseX, mouseY);
 
  for(let y=0; y<=mas; y+=15){
    for(let x=0; x<=mas; x+=25){
      let dism = dist(mouseX/2, mouseY/2, x*lug+lug/2, y*lug+lug/2);
      let diag = dist(0,0,width,height);
      let tam = map(dism,200,diag,25,lug);
      
        ellipse(x+210*lug+lug/2, y*lug+lug/2, tam, tam);
     
     
   }
  }
 }
function keyPressed(){
  if(key=='r'){
   if (reiniciar(400, 0, width/2, height, resultado)) {
     fond=255;
     fill(10);
     } else {
     fond=10;
     fill(255);
     }
  }
}
//apretar 'r' en la imagen de referencia hace que se reinicie, mientras que apretar 'r' en la obra lo cambia de color. 
