const arg = {
    a: 2,
    b: 3,
    operator: '+'
}

const num = [2,3,'+'];

function calculate (a, b, operator) {
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '*') {
        return a * b;
    } else if (operator == '/') {
        return a / b;
    }

    return 0;
}

console.log (calculate.apply (arg, num));




