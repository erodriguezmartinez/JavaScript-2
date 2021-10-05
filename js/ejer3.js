'use strict'
//Esperanza Rodríguez Martínez
//EJER 3: Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenaTexto=" "

let texto = prompt('Texto: ');

while(texto!=undefined){  //Preguntamos si no se ha pulsado aceptar
  console.log("Ha pulsado aceptar");
  cadenaTexto=cadenaTexto+texto+"-";
  texto = prompt('texto: ');

}
console.log("Ha pulsado cancelar");
console.log(cadenaTexto);
