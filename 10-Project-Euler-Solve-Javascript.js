/*
Summation of primes
Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

https://projecteuler.net/problem=10

*/

let limit = 2000000
let result = 0

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0 || num == i) {
            return false
        }
    }
    return true
}

for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
        result += i
        console.log(i, result)
    }
}