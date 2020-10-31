const {gardenNoAdj} = require('./index')

test("Coloring Problem - 3", () => {
    let result = gardenNoAdj(3, [[1, 2], [2, 3], [3, 1]]);
    expect(result).toMatchObject([1, 2, 3]);
});

//
// test("Coloring Problem - 1", () => {
//     let result = gardenNoAdj(1, []);
//     expect(result).toMatchObject([1]);
// });