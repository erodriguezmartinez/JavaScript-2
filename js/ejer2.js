'use strict'
//Esperanza Rodríguez Martínez
//EJER 2: Pide una nota (número). Muestra la calificación según la nota: 0-3: Muy deficiente, 3-5: Insuficiente,
// 5-6: Suficiente, 6-7: Bien, 7-9: Notable, 9-10: Sobresaliente

let nota = prompt('Nota: ')

if(nota<0 || isNaN(nota) || nota==" " || nota==""){
  console.log("Error en la nota introducida");
}else{
  if(nota>=0 && nota<3){
    console.log("Muy deficiente.")
  }else if (nota==3 || nota==4){
    console.log("Insuficiente.")
  }else if (nota==5){
    console.log("Suficiente.")
  }else if (nota==6 || nota==7){
    console.log("Bien.")
  }else if (nota==8 || nota==9){
    console.log("Notable.")
  }else{
    console.log("Sobresaliente.")
  }
}
