const sortArray = function (nums) {
    const increasingOrder = (a, b) => a - b;
    const heapify = function (i, n, comparator) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < n && comparator(nums[left], nums[i]) > 0)
            largest = left;
        if (right < n && comparator(nums[right], nums[largest]) > 0)
            largest = right;
        if (largest !== i) {
            let temp = nums[i];
            nums[i] = nums[largest];
            nums[largest] = temp
            heapify(largest, n, comparator);
        }
    }
    const buildHeap = function () {
        let n = nums.length;
        for (let i = Math.floor(n / 2); i >= 0; i--) {
            heapify(i, n, increasingOrder);
        }
    }

    const heapSort = function () {
        let n = nums.length;
        for (let i = 1; i <= n; i++) {
            let last = nums[n - i];
            nums[n - i] = nums[0];
            nums[0] = last;
            heapify(0, n - i, increasingOrder)
        }
    }
    buildHeap();
    heapSort();
    return nums;
};
module.exports = {sortArray}