const { digitSum, superDigit } = require("./index")

test("Digits Sum - 123", () =>{
    expect(superDigit("123",1)).toBe(6);
    expect(superDigit("123",3)).toBe(9);
});

test("Super Digit - 148148148", () =>{
    expect(superDigit("148148148",1)).toBe(3);
});

test("Digits Sum - 9875,1", () =>{
    expect(superDigit("9875",1)).toBe(2);
    expect(superDigit("9875",4)).toBe(8);
});

test("Digits Sum - 148", () =>{
    expect(superDigit("148",3)).toBe(3);
});