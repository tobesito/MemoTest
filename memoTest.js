<<<<<<< HEAD
//VARIABLES
var contador = "";
var idCarta1 = "";
var idCarta2 = "";
var valCarta1 = "";
var valCarta2 = "";
var intentos = 0;
var limiteIntentos = 20;
var aciertos = 0;
var volteadas = 0;

function reset(){
    window.location = window.location;
}

function mostrar(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "visible";
            x[i].querySelector("#sign").className = "oculta";
        }
    }
}

function mostrarPermanente(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "visible";
            x[i].querySelector("#sign").className = "oculta";
            x[i].onclick = null;
        }
    }
}

function ocultar(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "oculta";
            x[i].querySelector("#sign").className = "visible";
        }
    }
}

function mostrarPuntaje(){
    var puntos = document.getElementById("intentos");
    puntos.innerHTML = "Intentos realizados: " + intentos;
}

function chequear(carta){
    if (volteadas < 2){
        if (volteadas == 0){
            idCarta1 = carta.dataset.id;
            valCarta1 = carta.dataset.value;
            mostrar(idCarta1);
            volteadas = 1;
        }
        else if (volteadas == 1 && carta.dataset.id != idCarta1 && carta.dataset.id != idCarta2){ 
            idCarta2 = carta.dataset.id;
            valCarta2 = carta.dataset.value;
            mostrar(idCarta2);
            volteadas = 2;
        }
    
        if (volteadas == 2){
            intentos++;
            if (valCarta1 == valCarta2 ){ 
                mostrarPermanente(idCarta1);
                mostrarPermanente(idCarta2);
                valCarta1 = "";
                valCarta2 = "";
                idCarta1 = "";
                idCarta2 = "";
                volteadas = 0;
                aciertos++;
                if (aciertos == 10){
                    alert("GANASTE PAPU!!");
                    reset();
                }
            }
            mostrarPuntaje();
            if (intentos > limiteIntentos){
                alert("Perdiste :(");
                reset();
            }
        }
    
        if (volteadas > 0){
            tiempo = setTimeout(function () {
                ocultar(idCarta1);
                idCarta1 = "";
                volteadas = 0;
                if (idCarta2 != "") {
                     ocultar(idCarta2);
                     idCarta2 = ""; 
                    }
                mostrarPuntaje();
                clearTimeout(tiempo);
            }, 1500);
        }
    }
}
=======
var cartas = document.querySelectorAll("carta");

cartas.forEach(function(carta){
    carta.addEventListener("click", function(){
        chequear(carta);
    })
})

//VARIABLES
var contador = "";
var idCarta1 = "";
var idCarta2 = "";
var valCarta1 = "";
var valCarta2 = "";
var intentos = 0;
var limiteIntentos = 20;
var aciertos = 0;
var volteadas = 0;


function reset(){
    window.location = window.location;
}

function mostrar(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "visible";
            x[i].querySelector("#sign").className = "oculta";
        }
    }
}

function mostrarPermanente(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "visible";
            x[i].querySelector("#sign").className = "oculta";
            x[i].onClick = null;
        }
    }
}

function ocultar(idCarta){
    var x = document.getElementsByClassName("carta");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].dataset.id == idCarta) {
            x[i].querySelector("#card").className = "oculta";
            x[i].querySelector("#sign").className = "visible";
        }
    }
}

function mostrarPuntaje(){
    var puntos = document.getElementById("intentos");
    puntos.innerHTML = "Intentos realizados: " + intentos;
}

function chequear(carta){

    if (volteadas < 2){
        if (volteadas == 0){
            idCarta1 = carta.dataset.id;
            valCarta1 = carta.dataset.value;
            mostrar(idCarta1);
            volteadas = 1;
        }
        else if (volteadas == 1){ 
            idCarta2 = carta.dataset.id;
            valCarta2 = carta.dataset.value;
            mostrar(idCarta2);
            
            volteadas = 2;
        }
    
        if (volteadas == 2){
            intentos++;
            if (valCarta1 == valCarta2){ 
                //clearTimeout(tiempo);
                mostrarPermanente(idCarta1);
                mostrarPermanente(idCarta2);
                valCarta1 = "";
                valCarta2 = "";
                idCarta1 = "";
                idCarta2 = "";
                volteadas = 0;
                aciertos++;
                if (aciertos == 10){
                    alert("GANASTE PAPU!!");
                    reset();
                }
            }
            mostrarPuntaje();
            if (intentos > limiteIntentos){
                alert("Perdiste :(");
                reset();
            }
        }
    
        if (volteadas > 0){
            tiempo = setTimeout(function () {
                ocultar(idCarta1);
                idCarta1 = "";
                volteadas = 0;
                if (idCarta2 != "") {
                     ocultar(idCarta2);
                     idCarta2 = ""; 
                    }
                mostrarPuntaje();
                clearTimeout(tiempo);
            }, 1000);
        }
    }
    

}
>>>>>>> 2a8354c4282b35d5aea839449ca4497739dfc11c
