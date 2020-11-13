const {isNumber} = require('./IsNumber')

test("\"0\" => true", () => {
    let result = isNumber("0");
    expect(result).toBe(true);
});

test("\" 0.1 \" => true", () => {
    let result = isNumber(" 0.1 ");
    expect(result).toBe(true);
});


test("abc", () => {
    let result = isNumber("abc");
    expect(result).toBe(false);
});

test("1 a", () => {
    let result = isNumber("1 a");
    expect(result).toBe(false);
});

test("2e10", () => {
    let result = isNumber("2e10");
    expect(result).toBe(true);
});

test(" -90e3   ", () => {
    let result = isNumber(" -90e3   ");
    expect(result).toBe(true);
});

test(" -1e", () => {
    let result = isNumber(" 1e");
    expect(result).toBe(false);
});

test("e3", () => {
    let result = isNumber("e3");
    expect(result).toBe(false);
});

test(" 6e-1", () => {
    let result = isNumber(" 6e-1");
    expect(result).toBe(true);
});

test(" 99e2.5 ", () => {
    let result = isNumber(" 99e2.5 ");
    expect(result).toBe(false);
});


test("53.5e93", () => {
    let result = isNumber("53.5e93");
    expect(result).toBe(true);
});

test(" --6 ", () => {
    let result = isNumber(" --6 ");
    expect(result).toBe(false);
});

test("-+3", () => {
    let result = isNumber("-+3");
    expect(result).toBe(false);
});

test("95a54e53", () => {
    let result = isNumber("95a54e53");
    expect(result).toBe(false);
});

test(".", () => {
    let result = isNumber(".");
    expect(result).toBe(false);
});


test("1.", () => {
    let result = isNumber("1.");
    expect(result).toBe(true);
});





