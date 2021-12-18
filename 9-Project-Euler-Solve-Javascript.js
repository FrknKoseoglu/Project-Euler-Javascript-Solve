/*
Special Pythagorean triplet
Problem 9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

https://projecteuler.net/problem=9
*/

let limit = 1000
let result = {
    a: [],
    b: [],
    c: [],
    sum: [],
    pisagor: []
}

function pisagor(limit) {
    for (let a = 2; a <= limit; a++) {
        for (let b = 2; b <= limit; b++) {
            for (let c = 2; c <= limit; c++) {
                if (a + b + c == limit && (a * a) + (b * b) == c * c && a < b && b < c) {
                    result.a.push(a)
                    result.b.push(b)
                    result.c.push(c)
                    result.sum.push(a + b + c)
                    result.pisagor.push(c * c)
                    return (result.a[0] * result.b[0] * result.c[0])
                }
            }
        }
    }
    return false
}

console.log(pisagor(limit))