'use strict'
//Esperanza Rodríguez Martínez
//EJER 1: Pide la edad y si es mayor de 18 años indica que ya puede conducir.

let edad = prompt('Indique su edad: ')

if(edad<=0 || isNaN(edad) || edad==" " || edad==""){
  console.log("Error en la edad introducida");
}else{
  if(edad>=18){
    console.log("Ya puede coducir.")
  }else{
    console.log("Todavía no puede conducir.")
  }
}
