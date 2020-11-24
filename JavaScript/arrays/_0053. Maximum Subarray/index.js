const maxSubArray = function (nums) {
    const crossSum = function (left, right, middle) {
        if (left === right)
            return nums[left];

        let leftSubSum = Number.MIN_SAFE_INTEGER;
        let rightSubSum = Number.MIN_SAFE_INTEGER;
        let currSum = 0;
        for (let i = middle; i > left - 1; i--) {
            currSum += nums[i];
            leftSubSum = Math.max(leftSubSum, currSum);
        }

        currSum = 0;
        for (let i = middle + 1; i < right + 1; i++) {
            currSum += nums[i];
            rightSubSum = Math.max(rightSubSum, currSum);
        }
        return leftSubSum + rightSubSum;
    }

    const divide = function (left, right) {
        if (left === right) return nums[left];
        let mid = left + Math.floor((right - left) / 2);
        let leftSum = divide(left, mid);
        let rightSum = divide(mid + 1, right);
        let cSum = crossSum(left, right, mid);
        return Math.max(leftSum, rightSum, cSum);
    }
    return divide(0, nums.length - 1);
};
module.exports = {maxSubArray};