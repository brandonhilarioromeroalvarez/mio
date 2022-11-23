//
// SERIES
// recursively
//

// 1. fibonacci
// -> n 
// <- 1,1,2,...,n
//
// call
// fibonacci(5) returns the 5 first numbers of the series

// 2. power
// -> b base
// -> p power
// <- b*b*...b (p times)
//
// call
// power(2,3) returns 8

// 3. factorial
// -> n
// <- 2*3*...*n
//
// call
// factorial(3) returns 6
function fibonacci(n) {
    if (n < 2) {//base case
      return n
    }
        return fibonacci(n - 1)+fibonacci(n-2)//recursive call
}
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
power(p){
  
}