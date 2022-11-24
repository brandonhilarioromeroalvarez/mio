//fibonacci
function fibonacci(n) {
  if (n === 1) 
  {
    return [0,1];
  } 
  else 
  {
    var s = fibonacci(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
  }
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
console.log(fibonacci(10))
console.log(power(2,3))
console.log(factorial(6))
