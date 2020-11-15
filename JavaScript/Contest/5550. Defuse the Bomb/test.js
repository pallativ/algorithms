const {decrypt} = require('./index')

test("Input: code = [5,7,1,4], k = 3", () => {
    let result = decrypt([5, 7, 1, 4], 3);
    expect(result).toMatchObject([12, 10, 16, 13]);
});


test("Input: code = [1,2,3,4], k = 0", () => {
    let result = decrypt([1, 2, 3, 4], 0);
    expect(result).toMatchObject([0, 0, 0, 0]);
});

test("Input: code = [2,4,9,3], k = -2", () => {
    let result = decrypt([2,4,9,3], -2);
    expect(result).toMatchObject([12,5,6,13]);
});


test("Input: code = [10,5,7,7,3,2,10,3,6,9,1,6], k = -4", () => {
    let result = decrypt([10,5,7,7,3,2,10,3,6,9,1,6], -4);
    expect(result).toMatchObject([22,26,22,28,29,22,19,22,18,21,28,19]);
});

-4

