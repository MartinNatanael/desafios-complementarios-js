let cliente = "";
let dia = "";
let horarios = "";
let servicios = "";
let precio = 0;
let total = 0;


function saludar(){ 
    cliente = prompt (`¡Bienvenidos al area de turnos de LuaNails! 
Ingresa tu nombre por favor`)
if(cliente){

return alert(`Hola! ${cliente.toUpperCase()} 
Te solicitaremos algunos datos para agendar tu turno`);}

else{
   return alert("El nombre ingresado es incorrecto");
}
}




function eleccionTurno() {
    alert("¡Elegi el dia que queres venir!"+"\n"+"Ingres un numero del 1 al 5")
    dia = Number(prompt(`1-LUNES\n2-MARTES\n3-MIERCOLES\n4-JUEVES\n5-VIERNES`));
       
switch(dia){
    case 1:
      dia = "LUNES";
      break  
      case 2:
      dia = "MARTES";
      break 
      case 3:
      dia = "MIERCOLES";
      break 
      case 4:
      dia = "JUEVES";
      break 
      case 5:
      dia = "VIERNES";
      break  
      default:
          alert("El dia ingresado es incorrecto")
          dia = 0;
} 
alert("¿A que hora queres venir?")

horarios = Number(prompt(`1-15hs\n2-16hs\n3-17hs\n4-18hs\n5-19hs`));

switch(horarios){
    case 1:
      horarios = "15hs";
      break  
      case 2:
      horarios = "16hs";
      break 
      case 3:
      horarios = "17hs";
      break 
      case 4:
      horarios = "18hs";
      break 
      case 5:
      horarios = "19hs";
      break  
      default:
          alert("El horario ingresado es incorrecto")
          horarios = 0;

} 

return alert(`${cliente} tu turno quedó reservado para el dia ${dia} las ${horarios}`);

}

function eleccionServicio(){
     eleccion = confirm("¡Tenes la posibilidad de elegir lo que vas a hacerte en tus uñas ahora!");
   
    if(eleccion){
        while (isNaN(servicios) || servicios == 0 || servicios > 4) {
            servicios = parseInt(prompt("Elegi tu servicio, ingresando un numero \n 1-Esmaltado en manos $600 \n 2-Esmaltado en pies $500 \n 3-Esmaltado en manos y pies $ 1000"));
        }
        switch (servicios) {
            case 1:
                servicios = "Esmaltado en manos"
                precio = 600;
                
                break;
            case 2:
                servicios = "Esmaltado en pies"
                precio = 500;
                
                break;
            case 3:
                servicios = "Esmaltado en manos y pies"
                precio = 1000;
                
                break;
            default:
                alert("No ingresaste un valor correcto")
                servicios = "";
                precio = 0;
        }
    }
   
return alert(`Te vas a realizar ${servicios} El total es $${precio}`)
}

function descuento(){
    aplicarDescuento = confirm (`${cliente.toUpperCase()} ¿Queres obtener un cupon de 10% de descuento en tu servicio?`) 
    
    if(aplicarDescuento){
        
        datos = prompt("Dejanos tu e-mail y obtene tu descuento de 10%")
        total = (precio) - (precio*0.1); 
    }
 else{
   total = precio;
 }
}



saludar();
eleccionTurno();
eleccionServicio();
descuento();

alert(`Te vas a realizar ${servicios} El total es $${total}`);