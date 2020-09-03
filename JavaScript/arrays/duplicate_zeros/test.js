const {duplicateZeros} = require("./index");
test("Duplicate Zeros", () => {
    expect(duplicateZeros([1,0,2,3])).toMatchObject([1,0,0,2]);
    expect(duplicateZeros([0,0,0,0,0,0,0])).toMatchObject([0,0,0,0,0,0,0]);

})