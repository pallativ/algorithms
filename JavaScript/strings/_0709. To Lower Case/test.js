const { toLowerCase } = require("./index");

test("ToLower Case", () => {
    expect(toLowerCase("Hello")).toBe("hello");
});
test("ToLower Case", () => {
    expect(toLowerCase("hello")).toBe("hello");
});

test("ToLower Case", () => {
    expect(toLowerCase("LOVELY")).toBe("lovely");
});

