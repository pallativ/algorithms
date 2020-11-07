const countingSort = function (ar) {
    const findMax = function () {
        let max = 0;
        for (let item of ar) {
            max = Math.max(max, item);
        }
        return max;
    }

    let count = new Array(findMax() + 1).fill(0);

    for (let item of ar) {
        count[item]++;
    }

    let j = 0;
    ar = [];
    while (j <= count.length) {
        if (count[j] > 0) {
            ar.push(j);
            count[j]--;
        } else
            j++;
    }
    return ar;
}


module.exports = {countingSort};