const BinarySearch = function (nums, num) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === num)
            return mid;
        else if (nums[mid] > num)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}


test("Search element not found on left side", () => {
    let result = BinarySearch([1, 2, 3, 4, 5], -1);
    expect(result).toBe(0);
});

test("Search element not found on right side", () => {
    let result = BinarySearch([1, 2, 3, 4, 5], 10);
    expect(result).toBe(5);
});

test("Search element exists case", () => {
    let result = BinarySearch([1, 2, 3, 4, 5], 2);
    expect(result).toBe(1);
});

test("Search element exists first element", () => {
    let result = BinarySearch([1, 2, 3, 4, 5], 1);
    expect(result).toBe(0);
});


test("Search element exists first element", () => {
    let result = BinarySearch([1, 2, 3, 4, 5], 5);
    expect(result).toBe(4);
});
