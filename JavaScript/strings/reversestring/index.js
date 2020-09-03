function reverse(str) {
    let result = "";
    let strLength = str.length - 1;

    // This moving index from start -> end
    // for (i = 0; i < strLength; i++) {
    //     result += str[strLength-1-i];
    // }

    // Moving index from end -> start
    for (i = strLength; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

/**** THIS Optimal Solution     */
function reverse_v2(str) {
    let arr = str.split('');
    let length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        let rIndex = (length - 1) - i;
        let temp = arr[i];
        arr[i] = arr[rIndex];
        arr[rIndex] = temp;
    }
    return arr.join('');
}


module.exports = { reverse, reverse_v2 }