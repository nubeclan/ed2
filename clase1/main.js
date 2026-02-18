/**
 * NubeClan.COM - Educar es Compartir
 *
 * @author: Angel Céspedes Quiroz
 * @Web: https://www.nubeclan.com
 * @Linkedin: https://bo.linkedin.com/in/acq1305
 */

// main.js
// Punto de entrada para la aplicación, aquí se ejecutan los algoritmos y se muestra la salida en pantalla
import { LinkedList } from './lib/linkedlist.js';

// Escribe mensajes en la "consola" de la página
function logToScreen(message, kind = 'normal') {
    const consoleDiv = document.getElementById('console-output');
    const p = document.createElement('p');
    p.textContent = message;

    if (kind === 'bold') p.style.fontWeight = '700';
    if (kind === 'result') {
        p.style.color = '#0b5fff';
        p.style.fontWeight = '700';
    }
    if (kind === 'red') {
        p.style.color = '#ff0000';
        p.style.fontWeight = '700';
    }

    consoleDiv.appendChild(p);
}

// Función para mostrar resultados de sumPrimes
function mostrarConsolaSumPrimes() {
    const myList = new LinkedList();
    // Datos de ejemplo con números (primos: 5, 13, 7, 11)
    const datos = [5, 10, 13, 4, 7, 20, 11];

    logToScreen('--- 1.- sumPrimes ---', 'red');
    datos.forEach(num => myList.add(num));

    logToScreen(`Lista actual: ${myList.toString()}`);

    logToScreen('--- Ejecutando sumPrimes() ---', 'bold');
    const resultado = myList.sumPrimes();

    logToScreen(`RESULTADO FINAL (SUMA): ${resultado.total}`, 'result');
}

// Función para mostrar resultados de countVowels
function mostrarConsolaCountVowels() {
    const myList = new LinkedList();
    // Datos de ejemplo con strings que contienen vocales
    const datos = ['Hola', 'Mundo', 'JavaScript', 'AEIOU', 'xyz'];

    logToScreen('--- 2.- countVowels ---', 'red');
    datos.forEach(str => myList.add(str));

    logToScreen(`Lista actual: ${myList.toString()}`);

    logToScreen('--- Ejecutando countVowels() ---', 'bold');
    const resultado = myList.countVowels();

    logToScreen(`Vocales encontradas: ${resultado.details.join(', ')}`);
    logToScreen(`TOTAL VOCALES: ${resultado.total}`, 'result');
}

// Ejecutar ambas funciones
mostrarConsolaSumPrimes();
logToScreen(''); // Línea en blanco para separar
mostrarConsolaCountVowels();