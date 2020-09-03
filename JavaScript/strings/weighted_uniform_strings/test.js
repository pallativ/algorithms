const { weightedUniformStrings } = require('./index')

test("Test Waighted String", () => {
    expect(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10])).toMatchObject(["Yes", "Yes", "Yes", "Yes", "No", "No"])
})


// test("Test Waighted String", () => {
//     expect(weightedUniformStrings("kyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", [1, 3, 12, 5, 9, 10])).toMatchObject(["Yes", "Yes", "Yes", "Yes", "No", "No"])
// })

