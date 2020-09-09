var containsPattern = function (arr, m, k) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += m) {
            let item = arr.slice(j, m + j).join('');
            if (result[item] !== undefined) {
                result[item]++;
                if (result[item] >= k)
                    return true;
            } else {
                result = {};
                result[item] = 1;
            }
        }
        result = {};
    }
    return false;
};
module.exports = {containsPattern};