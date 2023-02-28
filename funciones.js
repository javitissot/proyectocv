
//este js es para que el boton enviar del formulario, muestre la alerta.
document.getElementById("botonenviar").onclick = function (){
    alert("sera contactado/a a la brevedad, MUCHAS GRACIAS!!!");
}


//los siguientes 3 js son para que los botones de contactos respondan al hacer click
document.getElementById("botontelefono").onclick = function () {
    document.getElementById("aparecenumerodetelefono").innerHTML = " +54 9 351243546";
}

document.getElementById("botondireccion").onclick = function () {
    document.getElementById("aparecedireccion").innerHTML = "Cordoba, Argentina (cpa: 1515cvx)";
}

document.getElementById("botonemail").onclick = function () {
    document.getElementById("apareceemail").innerHTML = "richarehz@gmail.com";
}



