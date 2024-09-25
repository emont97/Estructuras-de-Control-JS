/*EJERCICIO 7:Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
•La cantidad de valores negativos ingresados. 
•La cantidad de valores positivos ingresados. 
•La cantidad de múltiplos de 15. 
•El valor acumulado de los números ingresados que son pares. */

// Importar la librería para capturar datos desde la consola
const readline = require('readline');

// Crear interfaz para entrada de datos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicialización de variables
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let acumuladoPares = 0;
let contador = 0;

// Arreglo para almacenar las entradas del usuario
let valores = [];

// Función para pedir 10 valores con validación de enteros
function pedirValores() {
  rl.question(`Ingresa el valor #${contador + 1}: `, (input) => {
    let valor = parseInt(input);

    // Validar si el input es un número entero
    if (isNaN(valor) || input.trim() === "" || !Number.isInteger(valor)) {
      console.log("Por favor, ingresa un número entero válido.");
      pedirValores(); // Volver a pedir el valor si no es válido
    } else {
      valores.push(valor);  // Guardar el valor en el array si es válido
      contador++;

      if (contador < 10) {
        pedirValores();  // Repetir hasta obtener 10 valores
      } else {
        procesarValores();  // Procesar los valores después de ingresarlos
      }
    }
  });
}

// Función para procesar los valores ingresados
function procesarValores() {
  for (let i = 0; i < valores.length; i++) {
    let valor = valores[i];

    // Validar si el valor es negativo, positivo o cero
    if (valor < 0) {
      negativos++;
    } else if (valor > 0) {
      positivos++;
    }

    // Verificar si es múltiplo de 15
    if (valor % 15 === 0) {
      multiplosDe15++;
    }

    // Acumular si es par
    if (valor % 2 === 0) {
      acumuladoPares += valor;
    }
  }

  // Mostrar resultados
  console.log(`Cantidad de valores negativos: ${negativos}`);
  console.log(`Cantidad de valores positivos: ${positivos}`);
  console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
  console.log(`Valor acumulado de números pares: ${acumuladoPares}`);

  rl.close();  // Cerrar la interfaz de entrada
}
// Iniciar la solicitud de valores
pedirValores();