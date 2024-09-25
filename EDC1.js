/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no.
Utilizar para la condición el operador ternario.*/

// Importar la librería para capturar datos desde la consola
const inputPrompt = require('prompt-sync')({ sigint: true })
let edad = inputPrompt("Ingresa tu edad: ");
edad = Number(edad)

function valEdad() {
  if (isNaN(edad) || edad <= 0 || edad > 100) {
    console.log("Usted ingreso una edad no válida, favor ejecutar nuevamente e ingresar una edad válida")
  } else {
    let mensaje = (edad >= 18) ? "Usted tiene " + edad + " años, es mayor de edad" : "Usted tiene " + edad + " años, es menor de Edad"

    console.log(mensaje);
  }

}
valEdad(edad);

