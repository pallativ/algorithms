function calculateRunningSum(arr, dict) {
    let num = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        num += arr[i];
        let prop = num.toString();
        if (dict[prop] === undefined)
            dict[prop] = 1;
        else
            dict[prop]++;
    }
}

function equalStacks(h1, h2, h3) {
    let dict = {};
    let num = 0;
    calculateRunningSum(h1, dict);
    calculateRunningSum(h2, dict);
    calculateRunningSum(h3, dict);
    let max = 0;
    for (let key in dict) {
        let currMax = parseInt(key);
        if (dict[key] === 3)
            max = max < currMax ? currMax : max;
    }
    return max;
}

module.exports = {equalStacks};