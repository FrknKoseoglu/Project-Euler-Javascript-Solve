let limit = 4000000
let fibonacci = 1
let fibonacci_prev = 1
let fibonacci_next = 1
let result = 0

while (fibonacci < limit) {
    fibonacci = fibonacci_prev + fibonacci_next
    fibonacci_prev = fibonacci_next
    fibonacci_next = fibonacci

    if (fibonacci % 2 == 0) {
        result += fibonacci
    }
}

console.log(result)