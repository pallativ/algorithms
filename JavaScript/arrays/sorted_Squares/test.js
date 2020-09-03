const {sortedSquares} = require("./index");
test("sortedSquares", () => {
    expect(sortedSquares([1, 2, 4])).toMatchObject([1, 4, 16]);
});

test("sortedSquares - un sorted Order", () => {
    expect(sortedSquares([1, 4, 2])).toMatchObject([1, 4, 16]);
    expect(sortedSquares([-4,-1,0,3,10])).toMatchObject([0,1,9,16,100]);
    expect(sortedSquares([-7,-3,2,3,11])).toMatchObject([4,9,9,49,121]);

});

