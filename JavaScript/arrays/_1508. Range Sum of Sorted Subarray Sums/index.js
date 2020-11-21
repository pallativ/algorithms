const rangeSum = function (nums, n, left, right) {
    let keys = [];
    const push = function (n) {
        keys.push(n);
    }
    const sum = function (n) {
        let lastElement = keys[keys.length - 1];
        keys.push(lastElement + n);
    }

    const buildSumArray = function () {
        for (let i = 0; i < nums.length; i++) {
            push(nums[i]);
            for (let j = i + 1; j < nums.length; j++) {
                sum(nums[j]);
            }
        }
        keys.sort((a, b) => a - b);
    }

    const calculateRangeSum = function () {
        let result = 0;
        for (let start = left; start <= right; start++) {
            if (start - 1 >= keys.length)
                break;
            result += keys[start - 1];
        }
        return result % 1000000007;
    }
    buildSumArray();
    return calculateRangeSum();
};
module.exports = {rangeSum}