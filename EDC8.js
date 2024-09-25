/* EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.*/

// Importar la librería para capturar datos desde la consola
const readline = require('readline');

// Crear la interfaz para recibir entradas del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar la tabla de multiplicar
function mostrarTablaDeMultiplicar() {
    rl.question("Ingrese un número para mostrar su tabla de multiplicar: ", function (numero) {
        numero = parseInt(numero);

        // Validar que el número ingresado sea un número positivo
        if (isNaN(numero) || numero < 0) {
            console.log("Por favor, ingrese un número positivo válido.");
            mostrarTablaDeMultiplicar();  // Volver a pedir el número si es inválido
        } else {
            console.log(`Tabla de multiplicar del ${numero}:`);

            // Bucle para mostrar la tabla de multiplicar
            for (let i = 1; i <= 10; i++) {
                console.log(`${numero} x ${i} = ${numero * i}`);
            }

            // Preguntar si se desea obtener otra tabla
            rl.question("¿Desea obtener la tabla de multiplicar de otro número? (sí/no): ", function (respuesta) {
                if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                    mostrarTablaDeMultiplicar();  // Repetir el proceso si la respuesta es afirmativa
                } else {
                    console.log("Gracias por usar el programa.");
                    rl.close();  // Cerrar la interfaz si no desea continuar
                }
            });
        }
    });
}

// Iniciar el proceso
mostrarTablaDeMultiplicar();
