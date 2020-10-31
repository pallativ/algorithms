const {kidsWithCandies} = require('./index')

test("Input: candies = [2,3,5,1,3], extraCandies = 3", () => {
    let result = kidsWithCandies([2, 3, 5, 1, 3], 3);
    expect(result).toMatchObject([true, true, true, false, true])
})

test("Input: candies = [4,2,1,1,2], extraCandies = 1", () => {
    let result = kidsWithCandies([4, 2, 1, 1, 2], 1);
    expect(result).toMatchObject([true, false, false, false, false])
})
