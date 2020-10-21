const { balancedStringSplit } = require("./index");

test("Find Balanced Strings - RLRRLLRLRL", () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
});
test("Find Balanced Strings -RLLLLRRRLR", () => {
    expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
});

test("Find Balanced Strings -LLLLRRRR", () => {
    expect(balancedStringSplit("LLLLRRRR")).toBe(1);
});

test("Find Balanced Strings -RLRRRLLRLL", () => {
    expect(balancedStringSplit("RLRRRLLRLL")).toBe(2);
});

