'use strict'
//Esperanza Rodríguez Martínez
//EJER 5: Realizar una página con un script que calcule el valor de la letra de un número de DNI
// (Documento nacional de identidad). Busca el algoritmo en Internet.

//DECLARAMOS LAS VARIABLES QUE VAMOS A USAR

let dni = 0;
let letra = "";
do {
    let dni = prompt("Introduce tu dni: ");
    if (Number(dni) == dni) {
        dni = Number(dni);
        if (dni >= 0 && dni <= 99999999) {
            //CALCULAMOS EL RESTO DE DIVIDIR EL NÚMERO ENTRE 23
          let resto = dni % 23;
            //SEGÚN SEA EL RESTO ASIGNAMOS UN VALOR A LA VARIABLE LETRA
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                //SI NO ES UN NÚMERO ENTRE 0 Y 22 MOSTRAMOS UN ERROR
                    alert("Numero erroneo");
            }
        }
        //MOSTRAMOS MENSAJE CON EL DNI Y LA LETRA OBTENIDA
        alert("Numero: " + dni + ", Letra: " + letra);
    }
    //SI NO ES UN NÚMERO
    else {
        //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO
        if (dni != undefined) {
            alert(dni + " No es un numero");
        }
    }
//MIENTRAS NO SE PULSE CANCELAR VUELVE ARRIBA
} while (dni != undefined);
