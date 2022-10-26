class queue {
  el = [];
  top = 5
  insertar = (n) => {
    return this.el.splice(0, 0, n);
  }
  remove = () => {
    return this.el.pop();
  }
  isempty = () => {
    return this.el.length === 0;
  }
  isfull = () => {
    return this.el.length === this.top;
  }
 empty = () => {
    this.el.length === 0;
  }
  tamaño = () => {
    return this.el.length;
  }
}

      let cola = new queue()

cola.insertar(1)
cola.insertar(2)
cola.insertar(3)
cola.insertar(4)
cola.insertar(5)

console.log(cola.isfull())
console.log(cola.tamaño())
console.log(cola.remove())
console.log(cola.remove())
console.log(cola.remove())
console.log(cola.remove())
console.log(cola.remove())