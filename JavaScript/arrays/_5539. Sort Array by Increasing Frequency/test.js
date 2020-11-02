const {frequencySort} = require('./index')

test("Input: nums = [1,1,2,2,2,3]", () => {
    let result = frequencySort([1, 1, 2, 2, 2, 3]);
    expect(result).toMatchObject([3, 1, 1, 2, 2, 2]);
});

test("Input: nums = [2,3,1,3,2]", () => {
    let result = frequencySort([2, 3, 1, 3, 2]);
    expect(result).toMatchObject([1, 3, 3, 2, 2]);
});

test("Input: nums = [-1,1,-6,4,5,-6,1,4,1]", () => {
    let result = frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]);
    expect(result).toMatchObject([5, -1, 4, 4, -6, -6, 1, 1, 1]);
});

test("Input: nums = [0,-8,0,-8,3,9,0]", () => {
    let result = frequencySort([0, -8, 0, -8, 3, 9, 0]);
    expect(result).toMatchObject([9, 3, -8, -8, 0, 0, 0]);
});