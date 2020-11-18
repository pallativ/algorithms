const canPartition = function (nums) {
    const calculateSum = function () {
        return nums.reduce((total, num) => total + num);
    }

    const canPartitionRecursive = function (currentIndex, sum) {
        if (nums.length === 0 || currentIndex >= nums.length)
            return false;
        if (sum === 0)
            return true;
        dp[currentIndex] = dp[currentIndex] || [];
        if (dp[currentIndex][sum] === undefined) {
            // Include only if the current number is less than or equal to sum
            if (nums[currentIndex] <= sum) {
                if (canPartitionRecursive(currentIndex + 1, sum - nums[currentIndex])) {
                    dp[currentIndex][sum] = true;
                    return dp[currentIndex][sum];
                }
            }

            /// Not include the current number if current number is greater than sum.
            dp[currentIndex][sum] = canPartitionRecursive(currentIndex + 1, sum);
        }
        return dp[currentIndex][sum];
    }

    let dp = [];
    let sum = calculateSum();
    if (sum % 2 !== 0)
        return false;

    return canPartitionRecursive(0, sum / 2);
};
module.exports = {canPartition};