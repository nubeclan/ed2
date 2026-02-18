/**
 * NubeClan.COM - Educar es Compartir
 *
 * @author: Angel Céspedes Quiroz
 * @Web: https://www.nubeclan.com
 * @Linkedin: https://bo.linkedin.com/in/acq1305
 */

// node.js
// Clase Node (nodo de la lista enlazada)
export class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }

    // Setea el siguiente nodo (devuelve this para encadenar)
    setNext(node) {
        this.next = node;
        return this;
    }

    // Devuelve el siguiente nodo
    getNext() {
        return this.next;
    }

    // Setea el dato del nodo (devuelve this para encadenar)
    setData(data) {
        this.data = data;
        return this;
    }

    // Devuelve el dato
    getData() {
        return this.data;
    }

    // Representación como cadena (útil para debug/visualización)
    toString() {
        return String(this.data);
    }
}