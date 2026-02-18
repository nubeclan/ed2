/**
 * NubeClan.COM - Educar es Compartir
 *
 * @author: Angel Céspedes Quiroz
 * @Web: https://www.nubeclan.com
 * @Linkedin: https://bo.linkedin.com/in/acq1305
 */

// linkedlist.js
// Implementación básica de una lista enlazada 
import { Node } from './node.js';
import { Helpers } from './helper.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    // Añade un nodo al final
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
    }

    // Crea la lista desde un arreglo (comodidad)
    fromArray(arr) {
        arr.forEach(item => this.add(item));
    }

    // Devuelve una representación en string de la lista
    toString() {
        let current = this.head;
        const parts = [];
        while (current) {
            parts.push(String(current.data));
            current = current.next;
        }
        return parts.join(' -> ') + ' -> null';
    }

    // ----------------------------------------------------------------------------------
    // --- ALGORITMOS RESUELTOS ---
    // ----------------------------------------------------------------------------------

    // --- 1.- ALGORITMO: SUMAR PRIMOS ---
    // Recorre la lista, identifica primos y retorna { total }
    sumPrimes() {
        let sum = 0;
        let current = this.head;

        while (current) {
            const val = Number(current.data); // Aseguramos que sea un número
            if (Helpers.isPrime(val)) {
                sum += val;
            }
            current = current.next;
        }
        
        return { total: sum};
    }

    // --- 2.- ALGORITMO: CONTAR VOCALES (si la lista tuviera strings) ---
    // Recorre la lista, identifica vocales en los datos (si son strings) y retorna { total, details }
    countVowels() {
        let count = 0;
        let current = this.head;
        const vowelsFound = []; // Para almacenar las vocales encontradas

        while (current) {
            const val = String(current.data); // Convertimos a string para analizar caracteres
            for (const char of val) {
                if (Helpers.isVowel(char)) {
                    count++;
                    vowelsFound.push(char); // Guardamos la vocal encontrada para mostrar detalles después
                }
            }
            current = current.next;
        }

        return { total: count, details: vowelsFound };
    }
}