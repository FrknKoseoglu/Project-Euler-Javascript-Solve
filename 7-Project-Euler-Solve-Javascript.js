/*
10001st prime
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

https://projecteuler.net/problem=6

*/

let result = 0
let limit = 10001
let primeArr = []
let counter = 1

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0 || num == i) {
            return false
        }
    }
    return true
}

while (primeArr.length != limit) {
    counter++;
    if (isPrime(counter)) {
        primeArr.push(counter)
    }
}

console.log(primeArr[limit - 1])
// console.log(result)