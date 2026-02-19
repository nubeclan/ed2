```markdown
# Tarea Práctica 1: Fundamentos de Listas Enlazadas
**Asignatura:** Estructura de Datos II  
**Unidad I:** Listas Enlazadas (Linked Lists)  
**Lenguaje:** JavaScript (ES6 Modules)
**IDE:** [VSCODE] (https://code.visualstudio.com/)
**SERVER:** [LIVE SERVER] (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

## Objetivos
1. Entrenar la "lógica de punteros" y el recorrido secuencial.
2. Dominar el uso de bucles `while` y referencias `current`.
3. Implementar algoritmos modulares separando la lógica matemática de la estructura de datos.

---

## Bloque A: Algoritmos de Acumulación y Matemáticas
*Objetivo: Recorrer la lista completa y calcular un valor final.*

1. **`sumOdds()`**: Recorre la lista y retorna la suma únicamente de los números **impares**.
2. **`countEvens()`**: Retorna la cantidad (conteo) de nodos que contienen números **pares**.
3. **`getAverage()`**: Calcula y retorna el promedio aritmético de todos los valores (Suma / Cantidad).
4. **`multiplyAll()`**: Retorna el producto de multiplicar todos los nodos entre sí. *(Nota: inicializar acumulador en 1)*.
5. **`joinStrings()`**: Si la lista contiene strings, retorna una sola cadena concatenada (ej: "Ho" -> "la" = "Hola").
6. **`countGreaterThan(limit)`**: Recibe un número `limit` y retorna cuántos nodos tienen un valor mayor a ese límite.
7. **`getMin()`**: Encuentra y retorna el valor numérico más pequeño de la lista.
8. **`sumPositives()`**: Suma solo los números mayores a cero (ignora negativos).
9. **`countZeros()`**: Cuenta cuántas veces aparece el número 0 en la lista.
10. **`rangeSum(min, max)`**: Suma los valores de los nodos que estén dentro del rango numérico `[min, max]` inclusive.

---

## Bloque B: Búsqueda y Recuperación de Datos
*Objetivo: Detener el recorrido cuando se cumple una condición o encontrar una posición específica.*

11. **`exists(value)`**: Retorna `true` si el valor existe, `false` si no.
12. **`findFrequency(value)`**: Retorna cuántas veces se repite el valor `value` en la lista.
13. **`getByIndex(index)`**: Retorna el **valor** del nodo en la posición `index` (empezando en 0). Si no existe, retorna `null`.
14. **`indexOf(value)`**: Retorna el índice de la **primera** aparición de `value`. Retorna -1 si no existe.
15. **`lastIndexOf(value)`**: Retorna el índice de la **última** aparición de `value`.
16. **`firstEven()`**: Retorna el primer número par que encuentre. Si no hay, retorna `null`.
17. **`nodeAtHalf()`**: *(Reto)* Retorna el valor del nodo que está aproximadamente a la mitad de la lista.
18. **`getSecondToLast()`**: Retorna el valor del penúltimo nodo. *(Pista: verificar `current.next.next`)*.
19. **`searchPredecessor(value)`**: Busca el valor `value` y retorna el valor del nodo **anterior** a él.
20. **`getHeadValue()`**: Retorna el valor del primer nodo. Controlar si la lista está vacía.

---

## Bloque C: Verificación de Estado
*Objetivo: Responder preguntas sobre la estructura o el orden de la lista.*

21. **`isEmpty()`**: Retorna `true` si la lista no tiene nodos (sin usar propiedad `size`).
22. **`hasSingleElement()`**: Retorna `true` si la lista tiene exactamente un nodo.
23. **`isSortedAsc()`**: Retorna `true` si los números están ordenados ascendentemente. Si encuentra uno desordenado, retorna `false` inmediatamente.
24. **`areAllPositive()`**: Retorna `true` solo si **todos** los nodos son positivos.
25. **`hasDuplicates()`**: Verifica si hay algún número repetido en la lista.
26. **`isIdentical(otherList)`**: Verifica si esta lista y `otherList` son idénticas (mismo tamaño, mismos datos, mismo orden).
27. **`beginsWith(value)`**: Retorna `true` si el primer elemento coincide con `value`.
28. **`endsWith(value)`**: Retorna `true` si el último elemento coincide con `value`.

---

## Bloque D: Algoritmos con Recursividad
*Objetivo: Aplicar la lógica del "helper" recursivo (`_metodoPrivado(nodo)`).*

29. **`recursiveCount(node)`**: Versión recursiva de contar nodos.
30. **`recursiveSum(node)`**: Versión recursiva de sumar todos los elementos.
31. **`recursiveContains(node, value)`**: Busca un elemento recursivamente.
32. **`printReverseRecursive(node)`**: Imprime los valores de la lista **al revés** *(Pista: imprimir después de la llamada recursiva)*.
33. **`recursiveMax(node)`**: Encuentra el máximo usando recursividad.
34. **`elementsToStringRecursive(node)`**: Construye un string con todos los datos usando recursión.
35. **`isSortedRecursive(node)`**: Verifica si está ordenada usando recursividad.

---

## Bloque E: Conversión y Manipulación Básica
*Objetivo: Preparación para estructuras complejas.*

36. **`toArray()`**: Retorna un Array de JS `[]` con los datos de la lista.
37. **`fromArray(arr)`**: Construye una lista enlazada a partir de un array recibido.
38. **`clone()`**: Crea y retorna una copia exacta de la lista (nuevos nodos en memoria).
39. **`concatList(otherList)`**: Retorna una **nueva** lista que combina `this` + `otherList`.
40. **`printZigZag()`**: Imprime los elementos saltando de dos en dos (1ro, 3ro, 5to...).

---

## Bloque F: Modularidad y Lógica Matemática
*Objetivo: Crear métodos "Helpers" en `helper.js` para la lógica matemática y usarlos en `LinkedList`.*

41. **`countPrimes()`**: Cuenta cuántos nodos contienen números primos.
    *   *Helper:* `isPrime(n)`
42. **`sumFibonacci()`**: Suma los valores que pertenecen a la sucesión de Fibonacci.
    *   *Helper:* `isFibonacci(n)`
43. **`countPalindromicNumbers()`**: Cuenta números que se leen igual al derecho y al revés (ej: 131).
    *   *Helper:* `isPalindrome(n)`
44. **`sumNodesWithDigitSum(target)`**: Suma los nodos cuyos dígitos sumados dan `target` (Ej: 14 da 5).
    *   *Helper:* `getDigitSum(n)`
45. **`countPerfectSquares()`**: Cuenta cuántos nodos son cuadrados perfectos (4, 9, 16...).
    *   *Helper:* `isPerfectSquare(n)`
46. **`sumAboveAverage()`**: Suma valores mayores al promedio de la lista. (Requiere dos recorridos).
47. **`countPowersOfTwo()`**: Cuenta valores que son potencia de 2 (2, 4, 8, 16...).
    *   *Helper:* `isPowerOfTwo(n)`
48. **`printPerfectNumbers()`**: Imprime números perfectos (suma de divisores = número).
    *   *Helper:* `isPerfect(n)`
49. **`countVowelStarters()`**: Cuenta strings que comienzan con vocal.
    *   *Helper:* `startsWithVowel(str)`
50. **`sumBinaryPalindromes()`**: Suma nodos cuyo valor binario es palíndromo (ej: 5 es 101).
    *   *Helper:* `toBinary(n)` y `isPalindrome(str)`

---

## Instrucciones de Entrega
El proyecto debe seguir la siguiente estructura de archivos (ES6 Modules):

1.  `index.html`: Interfaz para ver los resultados en consola o pantalla.
2.  `node.js`: Clase `Node` (exportada).
3.  `helper.js`: Objeto con funciones matemáticas puras (Bloque F).
4.  `linkedlist.js`: Clase `LinkedList` con los 50 métodos implementados.
5.  `main.js`: Script de pruebas.

> **Nota:** Recuerda usar un servidor web como **Live Server, Xampp, Laragon, EasyPHP** u otro de tu preferencia para ejecutar el proyecto en el navegador sin errores de CORS.
```

---

## Autor
Hecho por: Angel Céspedes Quiroz [#acq1305](https://bo.linkedin.com/in/acq1305)

---

¿Dudas? Abre un issue o contacta al autor.