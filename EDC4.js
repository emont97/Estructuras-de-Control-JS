/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */

// Importar la librería para capturar datos desde la consola
const readline = require('readline');

// Configuramos el interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mayorNumero() {
    // Función que valida que la entrada sea un número entero
    function obtenerNumero(mensaje, callback) {
        rl.question(mensaje, (entrada) => {
            if (entrada.trim() === "" || isNaN(entrada) || !Number.isInteger(parseFloat(entrada))) {
                console.log("Entrada inválida. Por favor ingresa un número entero.");
                obtenerNumero(mensaje, callback);  // Volvemos a pedir si es inválido
            } else {
                callback(parseInt(entrada));  // Si es válido, devolvemos el número
            }
        });
    }

    // Pedimos los dos números al usuario con validación
    obtenerNumero("Ingresa el primer número: ", (num1) => {
        obtenerNumero("Ingresa el segundo número: ", (num2) => {
            // Comparamos los números
            if (num1 > num2) {
                console.log(`El número mayor es: ${num1}`);
            } else if (num2 > num1) {
                console.log(`El número mayor es: ${num2}`);
            } else {
                console.log("Ambos números son iguales.");
            }

            // Preguntar si el usuario desea continuar
            rl.question("¿Deseas comparar más números? Escribe 'si' para continuar o cualquier otra cosa para salir: ", (continuar) => {
                if (continuar.toLowerCase() === 'si') {
                    mayorNumero();  // Llamamos nuevamente si quiere continuar
                } else {
                    console.log("Gracias por usar el programa. ¡Adiós!");
                    rl.close();  // Cerramos la interfaz de readline
                }
            });
        });
    });
}

// Iniciamos el programa
mayorNumero();