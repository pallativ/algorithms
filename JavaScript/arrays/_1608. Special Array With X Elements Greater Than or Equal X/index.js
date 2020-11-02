const specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let low = 0, high = nums.length;
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2);
            if (nums[mid] >= i)
                high = mid;
            else
                low = mid + 1;
        }
        if ((nums.length - low) === i) return i;
    }
    return -1;
};

module.exports = {specialArray}