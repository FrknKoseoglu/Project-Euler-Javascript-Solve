/*
Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

let question_number = 600851475143

for (let i = 2; i < question_number; ++i) {
    if (question_number % i == 0) {
        question_number = question_number / i;
        i = 2;
    }
}

console.log(question_number)