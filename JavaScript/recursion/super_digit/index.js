
function digitSum(n, k) {
    let dict = {};

    for (let digit of n) {
        if (!dict[digit.toString()])
            dict[digit.toString()] = 1;
        else
            dict[digit.toString()]++;
    }
    let sum = 0;
    for (let key in dict) {
        sum += (parseInt(key) * (dict[key] + k - 1));
    }
    return sum;
}

function superDigit(n, k) {
    let sum = digitSum(n, k);
    let arr = sum.toString();
    if (arr.length !== 1)
        return superDigit(arr, 1);
    return sum;
}


module.exports = {digitSum, superDigit};