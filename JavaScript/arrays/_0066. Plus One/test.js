const {plusOne} = require('./index')

test("PlusOne With Carry", () => {
    let digits = [1, 2, 3];
    let result = plusOne(digits);
    expect(result).toMatchObject([1, 2, 4]);
});

test("PlusOne With 9999", () => {
    let digits = [9, 9, 9];
    let result = plusOne(digits);
    expect(result).toMatchObject([1, 0, 0, 0]);
});

test("PlusOne With 199", () => {
    let digits = [1, 9, 9];
    let result = plusOne(digits);
    expect(result).toMatchObject([2, 0, 0]);
});


test("PlusOne With 0", () => {
    let digits = [0];
    let result = plusOne(digits);
    expect(result).toMatchObject([1]);
});