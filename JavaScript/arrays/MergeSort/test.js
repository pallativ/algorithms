const {mergeSort} = require(('./index.js'))

test("Merge Sorting Using Extra Memory", () => {
    let nums = [5, 2, 3, 1];
    let result = mergeSort(nums, 1);
    console.log(result);
    expect(result).toMatchObject(nums.sort((a, b) => a - b));

    result = mergeSort(nums, 2);
    expect(result).toMatchObject(nums.sort((a, b) => b - a)); ///

    nums = [1, 5, 5, 7, 4545, 45, 45];
    result = mergeSort(nums, 1);
    expect(result).toMatchObject(nums.sort((a, b) => a - b));

    nums = [1, 5, 5, 7, 4545, 45, 45];
    result = mergeSort(nums, 2);
    expect(result).toMatchObject(nums.sort((a, b) => b - a));
});