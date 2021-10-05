'use strict'
//Esperanza Rodríguez Martínez
//EJER 4: Realiza un script que pida números hasta que se pulse “cancelar”.
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo.
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma= 0;
let numero = prompt('Número: ');

while(numero!=undefined){  //Preguntamos si no se ha pulsado cancelar
  if(isNaN(numero) || numero=="" || numero==" "){
    alert("ERROR.Ha introducido texto");
  }else{
    console.log("Ha pulsado aceptar");
    suma+=Number(numero);   //Convertimos en contenido de numero en integer
  }
  numero = prompt('Número: ');

}
console.log("Ha pulsado cancelar");
console.log(suma);
