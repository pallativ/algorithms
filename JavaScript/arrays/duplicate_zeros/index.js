let duplicateZeros = function (arr) {
    let length = arr.length;
    let prev_num = undefined;
    console.log(arr);
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            for (j = length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            i++;
        }
        console.log(arr);
    }
    return arr;
};

module.exports = {duplicateZeros};
