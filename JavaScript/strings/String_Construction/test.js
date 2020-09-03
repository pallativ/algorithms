const { stringConstruction, stringConstruction_v2 } = require('./index');

test("String Construction", () =>{
    expect(stringConstruction("abc")).toBe(3);
    expect(stringConstruction_v2("abc")).toBe(3);
});
