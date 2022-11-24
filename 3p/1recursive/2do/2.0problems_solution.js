//fibonacci
function fibonacci(n) {
    if (n < 2) {//base case
      return n
    }
        return fibonacci(n - 1)+fibonacci(n-2)//recursive call
}
//Potencia
function power(a,b){
  if (b == 0)
    return 1
  else
    return a * power(a,b-1)
}
//factorial
function factorial(a){
  if (a == 0)
    return 1
  else
    return a * factorial(a-1)
}
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))

console.log("Potencia: \n" + power(2,3) + "\n")
console.log("Factorial: \n" + factorial(3))
