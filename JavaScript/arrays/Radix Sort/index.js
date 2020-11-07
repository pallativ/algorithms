const getDigit = function (num, pos) {
    return (Math.floor(Math.abs(num) / Math.pow(10, pos))) % 10;
}
const getDigitsCount = function (num) {
    return Math.floor(Math.log10(num)) + 1;
}

const radixSort = function (ar, iteration, maxDigits, incrementer, loopTerminator) {
    let buckets = [];

    do {
        buckets = [];
        /// Push the items in to bucket using there significant digit
        for (let num of ar) {
            let bucketIndex = getDigit(num, iteration);
            if (!buckets[bucketIndex])
                buckets[bucketIndex] = [];
            buckets[bucketIndex].push(num);
        }
        iteration = incrementer(iteration);
        /// Copy back the buckets..
        ar = [];
        for (let item of buckets) {
            if (item) ar.push(...item);
        }
    } while (loopTerminator(iteration, maxDigits));
    return ar;
}

const radixSortUsingLSD = function (ar) {
    let maxDigits = 0;
    for (let item of ar) {
        maxDigits = Math.max(maxDigits, getDigitsCount(item));
    }
    return radixSort(ar, 0, maxDigits, (pos) => pos + 1, (pos, max) => pos < max)
}

const radixSortUsingMSD = function (ar) {
    let maxDigits = 0;
    for (let item of ar) {
        maxDigits = Math.max(maxDigits, getDigitsCount(item));
    }
    return radixSort(ar, maxDigits, maxDigits, (pos) => pos - 1, (pos, max) => pos >= 0)
}

module.exports = {radixSortUsingLSD, radixSortUsingMSD}