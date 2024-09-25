/*EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de la palma y como destino La costa del Sol, El descuento será de 5%,
Si el destino es Panchimalco el descuento será del 10% y 
si el destino es Puerto el Triunfo el descuento será del 15%. */

// Importar la librería para capturar datos desde la consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(origen, destino) {
    if (origen.toLowerCase() === "la palma") {
        if (destino.toLowerCase() === "la costa del sol") {
            return 0.05; // 5%
        } else if (destino.toLowerCase() === "panchimalco") {
            return 0.10; // 10%
        } else if (destino.toLowerCase() === "puerto el triunfo") {
            return 0.15; // 15%
        }
    }
    return 0.0; // Sin descuento
}

function esDestinoValido(destino) {
    const destinosValidos = ["la costa del sol", "panchimalco", "puerto el triunfo"];
    return destinosValidos.includes(destino.toLowerCase());
}

function solicitarOrigen() {
    rl.question('Introduce la ciudad de origen: ', (origen) => {
        if (origen.toLowerCase() !== 'la palma') {
            console.log("Solo se aceptan viajes desde la palma. Intenta de nuevo.");
            solicitarOrigen(); // Volver a preguntar
        } else {
            solicitarDestino(); // Continuar a preguntar destino
        }
    });
}

function solicitarDestino() {
    rl.question('Introduce la ciudad de destino: ', (destino) => {
        if (!esDestinoValido(destino)) {
            console.log("Destino no válido. Los destinos válidos son: La costa del Sol, Panchimalco, y Puerto el Triunfo.");
            solicitarDestino(); // Volver a pedir destino
        } else {
            const descuento = calcularDescuento('la palma', destino);
            console.log(`El descuento es del ${descuento * 100}%`);
            rl.close(); // Cerrar la interfaz
        }
    });
}

// Iniciar el flujo de la aplicación
solicitarOrigen();
