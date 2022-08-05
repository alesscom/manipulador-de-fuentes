var diferencia = 0;
var muneca_de_x = 0;
var muneca_iz_x = 0;
var texto ="";
function setup(){
    div = createDiv();
    div.attribute("id", "divp5");
    video=createCapture(VIDEO);
    video.size(550, 500);
    video.parent(div);
    canvas=createCanvas(550, 400);
    canvas.position(650, 150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    texto = document.getElementById(inp);
    
}
function modelLoaded(){
    console.log('posenet se ha inicializado');
}
function draw(){
    background('yellow');
    document.getElementById("lado_c").innerHTML="el ancho y alto del texto sera: " + diferencia + "px";
    fill('green');
    stroke('greenyellow');
    text(aaa, 50, 400);
    console.log(texto);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        muneca_de_x = results[0].pose.rightWrist.x;
        muneca_iz_x = results[0].pose.leftWrist.x;
        diferencia = floor(muneca_iz_x - muneca_de_x);
        console.log("muñeca izq es igual a " + muneca_iz_x + " y muñeca der es igual a " + muneca_de_x + "   la diferencia es de "+ diferencia);
    }
}