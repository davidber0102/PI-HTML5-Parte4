//Documento JavaScript

var mivideo, reproducir, barra, progreso, maximo, miaudio, play, barra2, progreso2;

maximo = 600;

function comenzar(){
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    miaudio=document.getElementById("miaudio");
    play=document.getElementById("play");
    barra2=document.getElementById("barra2");
    progreso2=document.getElementById("progreso2");


    reproducir.addEventListener("click",clickeando, false );
    barra.addEventListener("click",avance, false);

    play.addEventListener("click", clickeando2, false );
    barra2.addEventListener("click", avance2, false)
      }
                    
//videp
function clickeando()  {    
        if((mivideo.paused==false) && (mivideo.ended==false))        {
        mivideo.pause();
        reproducir.innerHTML="Play";              
        }
    else    {  
        mivideo.play();
        reproducir.innerHTML="Pause";
        bucle=setInterval(estado, 50) ;   
            }
    }

function estado() {
    if(mivideo.paused==false){
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);
        progreso.style.width = total+ "px";
    }
}

function avance(posicion){
    if((mivideo.paused==false) && (mivideo.ended==false )) {  
        var ratonX =posicion.pageX-barra.offsetLeft;
        var nuevoTiemp = ratonX*mivideo.duration/maximo;
        mivideo.currentTime = nuevoTiemp;
        progreso.style.width = ratonX+ "px";
    }
}

//audio

function clickeando2()  {    
    if((miaudio.paused==false) && (miaudio.ended==false))        {
    miaudio.pause();
    play.innerHTML="Play";              
    }
else    {  
    miaudio.play();
    play.innerHTML="Pause";
    bucle=setInterval(estado2, 50) ;   
        }
}

function estado2() {
if(miaudio.paused==false){
    var total = parseInt(miaudio.currentTime*maximo/miaudio.duration);
    progreso2.style.width = total+ "px";
}
}

function avance2(posicion){
if((miaudio.paused==false) && (miaudio.ended==false )) {  
    var ratonX =posicion.pageX-barra.offsetLeft;
    var nuevoTiemp = ratonX*miaudio.duration/maximo;
    miaudio.currentTime = nuevoTiemp;
    progreso2.style.width = ratonX+ "px";
}
}


window.addEventListener("load", comenzar, false);


