/* EJERCICIO 3: 
CATEGORIA AUMENTO 
A ---------- 15%
B ---------- 30%
C ---------- 10%
D ---------- 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento.
Deberá demostrar los datos del empleado y el aumento salarial.*/

// Importar la librería para capturar datos desde la consola
const prompt = require('prompt-sync')({ sigint: true });


// Función para calcular el aumento basado en la categoría
function calcularAumento(salario, categoria) {
    let aumento = 0;

    switch (categoria.toUpperCase()) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            return null;  // Retorna null si la categoría no es válida
    }

    return salario * aumento;
}

// Solicitar nombre
let nombre = prompt('Ingrese el nombre del trabajador:');
while (!nombre) {  // Validación para asegurarse que el nombre no esté vacío
    nombre = prompt('El nombre no puede estar vacío. Ingrese el nombre del trabajador:');
}

// Solicitar salario con validación
let salario = parseFloat(prompt('Ingrese el salario actual del trabajador (debe ser un número positivo):'));
while (isNaN(salario) || salario <= 0) {  // Validación para que el salario sea un número positivo
    salario = parseFloat(prompt('Salario inválido. Ingrese un salario positivo:'));
}

// Solicitar categoría con validación
let categoria = prompt('Ingrese la categoría del trabajador (A, B, C, D):').toUpperCase();
while (!['A', 'B', 'C', 'D'].includes(categoria)) {  // Validación para que la categoría sea A, B, C o D
    categoria = prompt('Categoría inválida. Ingrese la categoría del trabajador (A, B, C, D):').toUpperCase();
}

// Calcular el aumento
const aumento = calcularAumento(salario, categoria);

if (aumento !== null) {
    const nuevoSalario = salario + aumento;
    console.log(`\nNombre del empleado: ${nombre}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
} else {
    console.log('Error en la categoría del empleado.');
}
