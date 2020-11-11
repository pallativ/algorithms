const {shellSort} = require('./index')

test("Testing Shell Sort", () => {
    let ar = [7, 6, 4, 2, 4, 1, 1];
    let result = shellSort(ar);
    console.log(result.join(","));
    //expect(result).toBe(ar.sort((a, b) => a - b))
});