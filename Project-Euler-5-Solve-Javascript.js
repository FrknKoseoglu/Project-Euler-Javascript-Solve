/*
Smallest multiple
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

https://projecteuler.net/problem=5
*/

let result = 0
let counter = 1

function divideList(num, divide) {
    for (let i = 2; i <= divide; i++) {
        if (num % i != 0) {
            return false
        }
    }
    return true
}

while (result == 0) {
    counter++
    if (divideList(counter, 20)) {
        result = counter
    }
}

console.log(result)