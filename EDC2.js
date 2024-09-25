/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
•Examen =20%
•tareas = 40%
•asistencia = 10%
•investigación = 30% */

// Importar la librería para capturar datos desde la consola
const prompt = require('prompt-sync')({ sigint: true });

// Función para validar que las notas estén entre 0 y 10
function validarNota(nota, tipo) {
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt(`Nota inválida. Ingrese una nota válida para ${tipo} (entre 0 y 10): `));
    }
    return nota;
}

// Función para calcular la nota final
function calcularNotaFinal(examen, tareas, asistencia, investigacion) {
    const valorNotaExamen = 0.20;
    const valorNotaTareas = 0.40;
    const valorNotaAsistencia = 0.10;
    const valorNotaInvestigacion = 0.30;

    const notaFinal = (examen * valorNotaExamen) +
        (tareas * valorNotaTareas) +
        (asistencia * valorNotaAsistencia) +
        (investigacion * valorNotaInvestigacion);

    return notaFinal;
}

// Capturar los datos del alumno
const nombre = prompt("Ingrese el nombre del alumno: ");
const carnet = prompt("Ingrese el carnet del alumno: ");

// Capturar las notas con validación
let examen = parseFloat(prompt("Ingrese la nota del examen (entre 0 y 10): "));
examen = validarNota(examen, "examen");

let tareas = parseFloat(prompt("Ingrese la nota de las tareas (entre 0 y 10): "));
tareas = validarNota(tareas, "tareas");

let asistencia = parseFloat(prompt("Ingrese la nota de la asistencia (entre 0 y 10): "));
asistencia = validarNota(asistencia, "asistencia");

let investigacion = parseFloat(prompt("Ingrese la nota de la investigación (entre 0 y 10): "));
investigacion = validarNota(investigacion, "investigación");

// Calcular la nota final
const notaFinal = calcularNotaFinal(examen, tareas, asistencia, investigacion);

// Mostrar los datos del alumno y la nota final
console.log("\nDatos del Alumno:");
console.log("Nombre:", nombre);
console.log("Carnet:", carnet);
console.log("Nota Final:", notaFinal.toFixed(2));