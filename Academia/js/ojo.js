//Añadimos el evento "click" al ojo de la contraseña (en este caso es sólo para la página de inicio)
window.onload=function(){
    document.getElementById("ojo").addEventListener("click",ojo);
}
//Función que muestra o no la contraseña hacienco clic en el ojo que hay dentro del input
function ojo(){
    var ojo=document.getElementById("ojo");
    if(ojo.alt=="ojo1"){
        ojo.src="./img/ojo2.png";
        ojo.alt="ojo2";
        document.getElementById("password").setAttribute("type","text");
    }else{
        ojo.src="./img/ojo1.png";
        ojo.alt="ojo1";
        document.getElementById("password").setAttribute("type","password");
    }
}