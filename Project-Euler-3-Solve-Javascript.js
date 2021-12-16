let question_number = 600851475143

for (let i = 2; i < question_number; ++i) {
    if (question_number % i == 0) {
        question_number = question_number / i;
        i = 2;
    }
}

console.log(question_number)