const {addToArrayForm} = require('./index')

test("Input: A = [1,2,0,0], K = 34", () => {
    let result = addToArrayForm([1, 2, 0, 0], 34);
    expect(result).toMatchObject([1, 2, 3, 4]);
});

test("Input: A = [2,7,4], K = 181", () => {
    let result = addToArrayForm([2, 7, 4], 181);
    expect(result).toMatchObject([4, 5, 5]);
});

test("Input: A = [2,1,5], K = 806", () => {
    let result = addToArrayForm([2,1,5], 806);
    expect(result).toMatchObject([1,0,2,1]);
});

test("Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1", () => {
    let result = addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1);
    expect(result).toMatchObject([1,0,0,0,0,0,0,0,0,0,0]);
});