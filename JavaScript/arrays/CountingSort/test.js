const {countingSort} = require('./index')

test("Counting Sort", () => {
    let ar = [1, 2, 9, 7, 6];
    let result = countingSort(ar);
    expect(result).toMatchObject(ar.sort((a, b) => a - b))
});


test("Counting Sort", () => {
    let ar = [1, 2, 9, 7, 6, 10000];
    let result = countingSort(ar);
    expect(result).toMatchObject(ar.sort((a, b) => a - b))
});