/*EJERCICIO 9:Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit,
una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:

•Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
•Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
•Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
•Si no está entre ningún caso anterior la frase “Temperatura desconocida” */

//Importar la librería para capturar datos desde la consola
const readline = require('readline');

// Crear la interfaz para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función que devuelve un mensaje basado en la temperatura en Fahrenheit
function evaluarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Función principal que ejecuta el programa
function convertirYMostrarResultado(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius);
    let mensaje = evaluarTemperatura(fahrenheit);

    // Solo muestra la temperatura en Fahrenheit si no es "Temperatura desconocida"
    if (mensaje !== "Temperatura desconocida") {
        console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}`);
    }

    console.log(mensaje);
}

// Leer la entrada del usuario desde el teclado
rl.question('Introduce la temperatura en grados Celsius: ', (input) => {
    let temperaturaCelsius = parseFloat(input);

    // Validar que la entrada sea un número
    if (isNaN(temperaturaCelsius)) {
        console.log("Por favor, introduce un número válido.");
    } else {
        convertirYMostrarResultado(temperaturaCelsius);
    }

    // Cerrar la interfaz de readline
    rl.close();
});
