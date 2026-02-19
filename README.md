# Estructura de Datos II

Este documento presenta la organización lógica de los contenidos de la asignatura, agrupando los temas por afinidad conceptual, implementación técnica y aplicaciones prácticas.

---

## UNIDAD I: LISTAS ENLAZADAS (VINCULADAS)

### 1. Fundamentos de las Listas Enlazadas
*Agrupación de conceptos introductorios y justificación de la estructura.*
*   **Conceptos Generales:** Conceptos básicos y sintaxis importante utilizada para listas enlazadas.
*   **Justificación:** ¿Por qué necesitamos una lista enlazada? y sus beneficios.

### 2. Operaciones Básicas en Listas Enlazadas Simples
*Métodos esenciales para interactuar con la lista sin modificar su estructura fundamental.*
*   **Recorrido y Visualización:**
    *   Mostrar lista vinculada (Método Iterativo y Método Recursivo).
    *   Visualización recursiva.
*   **Operaciones de Consulta/Cálculo:**
    *   Contar nodos.
    *   Suma de todos los elementos.
    *   Encontrar el elemento máximo.
*   **Búsqueda:**
    *   Búsqueda básica y métodos para mejorar la búsqueda.

### 3. Gestión y Modificación de Datos (Inserción y Eliminación)
*Métodos que alteran el contenido de la lista agregando o quitando nodos.*
*   **Inserción:**
    *   Creación de una lista usando Insertar (general).
    *   Insertar al final.
    *   Insertar en una lista ordenada.
*   **Eliminación:**
    *   Eliminación general de nodos.
    *   Eliminar duplicados de una lista ordenada.

### 4. Algoritmos Avanzados y Manipulación de la Estructura
*Métodos que implican lógica compleja o reestructuración completa.*
*   **Inversión de la lista:**
    *   Invertir una lista vinculada (métodos generales).
    *   Invertir usando punteros deslizantes.
    *   Recursividad reversa.
*   **Operaciones con múltiples listas:**
    *   Concatenar dos listas.
    *   Fusión (Merge) de dos listas vinculadas.
*   **Verificación y Ciclos:**
    *   Comprobar si una lista está ordenada.
    *   Buscar LOOP (bucles) en la lista enlazada.

### 5. Variaciones de Listas Enlazadas
*Tipos de listas más complejas y sus métodos específicos.*
*   **Listas Enlazadas Circulares:**
    *   Concepto y visualización.
    *   Insertar y eliminar en listas circulares.
*   **Listas Doblemente Enlazadas:**
    *   Concepto general.
    *   Insertar, eliminar e invertir en listas doblemente enlazadas.
*   **Listas Circulares Doblemente Enlazadas:** Conceptos generales.

### 6. Análisis Comparativo
*Enfoque en rendimiento y diferencias con otras estructuras.*
*   Comparación entre listas enlazadas.
*   Comparación de matrices (arrays) con listas enlazadas.

---

## UNIDAD II: PILAS (STACK)

### 1. Fundamentos de las Pilas
*Conceptos introductorios para entender el comportamiento LIFO.*
*   **Introducción a Pilas:** Definición y comportamiento básico.

### 2. Implementación y Representación en Memoria
*Construcción de la Pila utilizando estructuras de datos base.*
*   **Implementación Estática (Arrays):**
    *   Pilas usando Arreglos.
    *   Implementación de Pilas usando Arreglos.
*   **Implementación Dinámica (Listas):**
    *   Pilas usando Lista Enlazada.
    *   Operaciones de pila usando lista enlazada (Push, Pop, Peek, etc.).

### 3. Aplicaciones de las Pilas: Expresiones Aritméticas
*Uso práctico principal: análisis y conversión de expresiones.*
*   **Teoría de Expresiones:** Asociatividad y operadores unarios.
*   **Algoritmos de Conversión (Notación Polaca):**
    *   Conversión de infijo a sufijo.
    *   Conversión de Infijo a Postfijo.
    *   Infijo a Postfijo usando el método de pila.

---

## UNIDAD III: COLAS (QUEUE)

### 1. Fundamentos y Teoría
*   **Introducción al TAD Cola:** Concepto abstracto.

### 2. Implementación Técnica
*   **Implementación Estática (Arreglos):**
    *   Implementando Colas usando Arreglos.
    *   Desventaja de usar Arreglos en Colas.
    *   Cola Circular (solución a desventajas de arreglos lineales).
*   **Implementación Dinámica (Listas):**
    *   Cola usando lista enlazada.
    *   Cola usando un solo puntero.
    *   Cola usando dos punteros.

### 3. Variaciones y Aplicaciones Avanzadas
*   **Tipos Especiales de Colas:**
    *   Función DEQUEUE (Cola de doble extremo).
    *   Colas de prioridad.
*   **Algoritmos Relacionados:** Colas usando dos pilas.

---

## UNIDAD IV: ÁRBOLES

### 1. Fundamentos y Propiedades Matemáticas
*   **Conceptos Generales:** Introducción a árboles y Terminologías.
*   **Tipos de Árboles y Relaciones:**
    *   Árboles n-arios y su análisis.
    *   Nodos internos frente a nodos externos en el árbol binario.
    *   Árbol binario estricto (y relación Altura vs Nodo).
    *   Nodos internos frente a nodos externos de árboles binarios estrictos.
*   **Cálculos de Eficiencia:**
    *   Número de árboles binarios utilizando N nodos.
    *   Altura vs Nodos en Árbol Binario.

### 2. Árboles Binarios: Estructura y Recorridos
*   **Clasificación:**
    *   Árbol binario lleno vs completo.
    *   Árbol binario estricto vs completo.
*   **Representación e Implementación:**
    *   Representación del Árbol Binario.
    *   Representación vinculada del árbol binario.
*   **Operaciones de Recorrido:**
    *   Recorridos de árboles binarios.
    *   Métodos de recorrido de árbol binario.

### 3. Árboles de Búsqueda Binaria (BST)
*   **Teoría y Operaciones:**
    *   Introducción a Árboles de búsqueda binaria.
    *   Creación de un árbol de búsqueda binaria.
    *   Inserción (normal y recursiva).
    *   Eliminación del árbol de búsqueda binaria.
*   **Limitaciones:** Desventajas en un Árbol de Búsqueda Binaria.

### 4. Árboles Balanceados y Avanzados
*   **Árboles AVL (Auto-balanceados):**
    *   Introducción a Árboles AVL y análisis de altura.
    *   Generación de árbol AVL.
    *   Rotaciones: Forma general, Insertando con rotaciones, Eliminación con rotaciones.
*   **Árboles Multicamino y Rojinegros:**
    *   Árboles 2-3 y Árboles 2-3-4.
    *   Introducción a los árboles Red-Black.
    *   Árboles Red-Black vs Árboles 2-3-4.
    *   Casos de eliminación de árbol Red-Black.

---

## UNIDAD V: HEAP (MONTÍCULOS)

### 1. Conceptos y Operaciones Básicas
*   Introducción a Heap.
*   Creando un Heap.
*   Insertando en un Heap.
*   Eliminando y Ordenando un Heap (Heap Sort).

### 2. Aplicaciones
*   Heap como Cola de Prioridad.

---

## UNIDAD VI: TÉCNICAS DE ORDENAMIENTOS/CLASIFICACIÓN

### 1. Análisis de Algoritmos
*   Criterios utilizados para analizar clasificaciones.

### 2. Algoritmos Elementales (O(n²))
*   Ordenamiento de burbuja (Bubble Sort).
*   Ordenamiento de Inserción (Insertion Sort).
*   Ordenamiento por Selección (Selection Sort).
*   Shell Sort (Mejora de inserción).

### 3. Algoritmos Eficientes "Divide y Vencerás" (O(n log n))
*   Ordenamiento Rápido (Quick Sort).
*   Ordenamiento por Fusión (Merge Sort).

### 4. Algoritmos de Distribución (No comparativos)
*   Ordenamiento por Conteo (Count Sort).
*   Bin / Bucket Sort.
*   Radix Sort.

---

## UNIDAD VII: TÉCNICAS DE HASHING

### 1. Fundamentos
*   Introducción a las técnicas de Hashing.
*   Ideas de funciones Hash.

### 2. Resolución de Colisiones: Encadenamiento (Listas)
*   Encadenamiento.

### 3. Resolución de Colisiones: Direccionamiento Abierto
*   Sondeo lineal.
*   Sondeo cuadrático.
*   Hashing doble.

## Autor
Hecho por: Angel Céspedes Quiroz [#acq1305](https://bo.linkedin.com/in/acq1305)

---

¿Dudas? Abre un issue o contacta al autor.
