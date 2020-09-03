const {isValid} = require("./index");

test("Test Valid String", () =>{
    expect(isValid("abcdefghhgfedecba")).toBe("YES");
})