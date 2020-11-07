const countingSort = function (ar) {
    const findMax = function () {
        let max = 0;
        for (let item of ar) {
            max = Math.max(max, item);
        }
        return max;
    }

    let count = new Array(findMax() + 1).fill(0);

    for (let item in ar) {
        count[item]++;
    }

    let i = 0;
    for (let index = 0; index < count.length; index++) {
        if (count[index] !== 0)
            ar[i++] = index;
    }
    return ar;
}
module.exports = {countingSort};