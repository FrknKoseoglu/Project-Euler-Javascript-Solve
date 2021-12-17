/*
Smallest multiple
Problem 5

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
3025 - 385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

https://projecteuler.net/problem=6
*/

let result = 0
let square = 0
let sum = 0
let limit = 100

for (let i = 1; i <= limit; i++) {
    square += (i * i)
    sum += i
    if (i == limit) {
        sum = sum * sum
        result = sum - square
    }
}

console.log(result)