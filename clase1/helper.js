/**
 * NubeClan.COM - Educar es Compartir
 *
 * @author: Angel Céspedes Quiroz
 * @Web: https://www.nubeclan.com
 * @Linkedin: https://bo.linkedin.com/in/acq1305
 */

// helper.js
// Funciones auxiliares (matemáticas, validaciones, etc.)
export const Helpers = {
    // Valida si un número n es primo
    isPrime(n) {
        // Asegurarse de que sea entero y convertir si viene en string
        const num = Number(n);
        if (!Number.isInteger(num)) return false;
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        const limit = Math.sqrt(num); // Solo necesitamos verificar hasta la raíz cuadrada
        for (let i = 3; i <= limit; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    },

    // Valida si un valor es una vocal
    isVowel(char) {
        if (typeof char !== 'string' || char.length !== 1) return false;
        return 'aeiouAEIOU'.includes(char);
    }
};