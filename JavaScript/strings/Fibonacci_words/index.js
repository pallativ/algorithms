function Fibonacci_words(a, b, n) {
    console.log(`${a},${b}`);
    if (b.length >= n)
        return b[n - 1];
    let temp = b;
    b = a + b;
    a = temp;
    return Fibonacci_words(a, b, n);
}

function processData(input) {
    let lines = input.split('\n');
    lines.shift();
    for (let line of lines) {
        let arr = line.split(' ');
        let ans = Fibonacci_words(arr[0], arr[1], parseInt(arr[2]));
        console.log(ans);
    }
}

module.exports = {processData, Fibonacci_words};
