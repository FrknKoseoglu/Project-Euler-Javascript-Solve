let arrPolindrome = []

function isPolindrome(num) {
    let numStr = num.toString()
    if (numStr.length % 2 != 0 || numStr[0] != numStr[numStr.length - 1]) { // just faster complete
        return false
    }
    let numLeft = numStr.slice(0, numStr.length / 2)
    let numRight = numStr.slice(numStr.length / 2, numStr.length)
    let numRightReverse = ""
    for (let i = numRight.length - 1; i >= 0; i--) {
        numRightReverse += numRight[i]
    }
    if (numLeft == numRightReverse) {
        return true;
    } else {
        return false;
    }
}
for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        if (isPolindrome(i * j)) {
            arrPolindrome.push(i * j)
        }
    }
}
console.log(Math.max(...arrPolindrome))