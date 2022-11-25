var canvass = document.getElementById("canva");
var ctx = canvass.getContext("2d");
var eventomouse = "";
var cor = "black";
var raio = 5;
var largura = 2;
var posicaomouseX, posicaomouseY;


canvass.addEventListener("mouseleave", mousefora);

function mousefora(e){
    eventomouse = "mouseleave";
}

canvass.addEventListener("mouseup", mousesolta);

function mousesolta(e){
    eventomouse = "mouseup";
}

canvass.addEventListener("mousedown", mouseclica);

function mouseclica(e){
    eventomouse = "mousedown";
}
    
canvass.addEventListener("mousemove", movimento_mouse);

function movimento_mouse(e){
    posicaomouseX = e.clientX - canvass.offsetLeft;
    posicaomouseY = e.clientY - canvass.offsetTop;

    if (eventomouse == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;    
        //ctx.moveTo(posicaoX, posicaoY);
        ctx.arc(posicaomouseX, posicaomouseY, raio, 0, 2 * Math.PI);
        ctx.stroke();
    }

   //  posicaoX = posicaomouseX;
  //  posicaoY = posicaomouseY;



}
