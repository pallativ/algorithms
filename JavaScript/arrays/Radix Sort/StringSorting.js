/// This is not space efficient, because it is using the buckets for storing the items.
const radixStringSorting = function (ar) {
    let buckets = new Array(256).fill(0);

    let length = ar[0].length;
    for (let iteration = length - 1; iteration >= 0; iteration--) {
        for (let item of ar) {
            /// Counting
            let index = item.charCodeAt(iteration) - 'a'.charCodeAt(0);
            if (!buckets[index])
                buckets[index] = [];
            buckets[index].push(item);
        }

        let temp = [];
        for (let i = 0; i < 256; i++) {
            if (buckets[i] !== 0)
                temp.push(...buckets[i]);
        }
        buckets.fill(0);
        ar = [...temp];
    }
    return ar;
}

const radixStringSortingWithExtraSpace = function (ar) {
    let buckets = new Array(256);

    let length = ar[0].length;
    for (let iteration = length - 1; iteration >= 0; iteration--) {
        buckets.fill(0);
        for (let item of ar) {
            /// Counting
            let index = item.charCodeAt(iteration) - 'a'.charCodeAt(0);
            buckets[index + 1]++;
        }

        for (let i = 1; i < 256; i++) {
            buckets[i] += buckets[i - 1];
        }

        let temp = [];
        for (let item of ar) {
            let index = item.charCodeAt(iteration) - 'a'.charCodeAt(0);
            let loc = buckets[index]++;
            temp[loc] = item;
        }
        ar = [...temp];
    }
    return ar;
}


module.exports = {radixStringSorting, radixStringSortingWithExtraSpace};