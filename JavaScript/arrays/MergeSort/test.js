const {mergeSort} = require(('./index.js'))

test("Merge Sorting Using Extra Memory", () => {
    let nums = [5, 2, 3, 1];
    let result = mergeSort(nums, 1);
    console.log(result);
    result = mergeSort(nums, 2);
    console.log(result);
    //expect(result).toMatchObject([5, 3, 2, 1]);
    //
    // nums = [1, 5, 5, 7, 4545, 45, 45];
    // result = mergeSort(nums,1);
    // expect(result).toMatchObject([4545, 45, 45, 7, 5, 5, 1]);
});