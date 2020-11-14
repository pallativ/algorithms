const {strongPasswordChecker} = require('./index')

test("No Lower Case", () => {
    let result = strongPasswordChecker("BBCCDD12");
    expect(result).toBe(1);
});

test("No Upper Case", () => {
    let result = strongPasswordChecker("bbccdd12");
    expect(result).toBe(1);
})

test("No Digit Case", () => {
    let result = strongPasswordChecker("bbccddBB");
    expect(result).toBe(1);
})

test("Only Digits with consecutive", () => {
    let result = strongPasswordChecker("222.222.222");
    expect(result).toBe(3);
});

test("Only Digits with consecutive", () => {
    let result = strongPasswordChecker("222.321.123");
    expect(result).toBe(2);
});

test("Less than 6", () => {
    let result = strongPasswordChecker("a");
    expect(result).toBe(5);
});

test("Greater than 20", () => {
    let password = "1234567890123456789012";
    let result = strongPasswordChecker(password);
    expect(result).toBe(4);
});

test("Input: password = \"aA1\"", () => {
    let password = "aA1";
    let result = strongPasswordChecker(password);
    expect(result).toBe(3);
});

test("Input: password = \"1337C0d3\"", () => {
    let password = "1337C0d3";
    let result = strongPasswordChecker(password);
    expect(result).toBe(0);
});

test("Input: password = \"aaAA11\"", () => {
    let password = "aaAA11";
    let result = strongPasswordChecker(password);
    expect(result).toBe(0);
});

test("ABABABABABABABABABAB1", () => {
    let password = "ABABABABABABABABABAB1";
    let result = strongPasswordChecker(password);
    expect(result).toBe(2);
});



