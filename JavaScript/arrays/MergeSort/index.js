const increasingOrder = (a, b) => (b - a);
const decreasingOrder = (a, b) => (a - b);

const mergeSort = function (nums, order) {
    if (nums.length <= 1)
        return nums;
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);
    left = mergeSort(left, order);
    right = mergeSort(right, order);
    return merge(left, right, order);
}
const merge = function (left, right, order) {
    let result = [];
    let comparator = (order === 1) ? increasingOrder : decreasingOrder;
    while (left.length > 0 && right.length > 0) {
        if (comparator(left[0], right[0]) >= 0)
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    if (left.length > 0)
        result.push(...left);
    if (right.length > 0)
        result.push(...right);
    return result;
}

module.exports = {mergeSort}