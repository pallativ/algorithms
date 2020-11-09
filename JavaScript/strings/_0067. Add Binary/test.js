const {addBinary} = require('./index');

test("Adding Binary Numbers - 10 + 01", () => {
    let result = addBinary("10", "1");
    expect(result).toBe("11");
});

test("Adding Binary Numbers - 10 + 11", () => {
    let result = addBinary("10", "11");
    expect(result).toBe("101");
});

test("Adding Binary Numbers - 11 + 11", () => {
    let result = addBinary("11", "11");
    expect(result).toBe("110");
});

test("Adding Binary Numbers - 1010 + 11", () => {
    let result = addBinary("1010", "1011");
    expect(result).toBe("10101");
});