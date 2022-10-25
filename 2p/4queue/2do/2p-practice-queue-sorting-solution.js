function queue() {
  this.dataStore = []

  this.enqueue = function(element) {
    this.dataStore.push(element)
    pasos++
  }

  this.dequeue = function() {
    if (this.empty()) {
      console.log("La fila esta vacia")
    }
    else {
      this.dataStore.shift()
      pasos++
    }
  }
  
  this.pop = function() {
    if (this.empty()) {
      console.log("La fila esta vacia")
    }
    else {
      this.dataStore.pop()
      pasos++
    }
  }

  this.front = function() {
    return this.dataStore[0]
  }

  this.back = function() {
    return this.dataStore[this.dataStore.length - 1]
  }

  this.toString = function() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }

  this.empty = function() {
    if (this.dataStore.length == 0)
      return true
    else
      return false

  }

  this.full = function() {
    if (this.dataStore.length == 5)
      return true
    else
      return false
  }
}

function Stack() {
  this.data = []

  this.push = function(o) {
    this.data.push(o)
    pasos++
  }

  this.pop = function() {
    if (this.isEmpty()) {
      console.log("La fila esta vacia")
    }
    else {
      this.data.pop()
      pasos++
    }
  }

  this.peek = function() {
    return this.data[this.data.length - 1]
  }

  this.isEmpty = function() {
    if (this.data.length == 0)
      return true
    else
      return false
  }
}

console.time("time")  
let pasos = 0
let p = new queue()
let s = new Stack()
let n

for (let i = 0; i < 10; i++) {
  n = Math.floor(Math.random() * 10)
  if (p.back() > n) {
    while (p.back() > n) {
      s.push(p.back())
      p.pop()
    }
    p.enqueue(n)
    while (s.isEmpty() === false) {
      p.enqueue(s.peek())
      s.pop()
    }
  }

  else {
    p.enqueue(n)
  }
}

console.log(p.toString())

console.log("Num pasos =", pasos)
console.timeEnd("time")