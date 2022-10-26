console.time('Tiempo')
class Stack {
  constructor() {
    this.data = []
  }

  push(objet) {
    this.data.push(objet)
    pasos++
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  pop() {
    if (this.isEmpty())
      console.log("La pila esta vacia")
    else
      this.data.pop()
    pasos++
  }

  size() {
    console.log(this.data.length)
  }

  isEmpty() {
    if (this.data.length === 0)//this.size()
      return true
    else
      return false
  }

  traverse() {
    for (let i = this.data.length - 1; i >= 0; i--) {
      console.log(this.data[i])
    }
  }

  search(k) {
    if (this.data.indexOf(k) >= 0)//this.size()
      console.log(k, "esta en la posicion", this.data.indexOf(k))
    else
      console.log("No se encontro el elemento")
  }

  makeEmpty() {
    this.data = []
  }
}

let pasos = 0
let p = new Stack()
let s = new Stack()
let n

for (let i = 0; i < 10; i++) {
  n = Math.floor(Math.random() * 10)
  if (p.peek() < n) {
    while (p.peek() < n) {
      s.push(p.peek())
      p.pop()
    }
    p.push(n)
    while (s.isEmpty() === false) {
      p.push(s.peek())
      s.pop()
    }
  }

  else {
    p.push(n)
  }
}

p.traverse()
p.search(5)
console.log("llevo", pasos)
console.timeEnd('Tiempo');