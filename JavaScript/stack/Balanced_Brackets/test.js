const {isBalanced} = require('./index');

test("IsBalnced Brackets", () => {
    expect(isBalanced("{}")).toBe("YES");
    expect(isBalanced("{[}")).toBe("NO");
    expect(isBalanced("{[()]}")).toBe("YES");
    expect(isBalanced("{[(])}")).toBe("NO");
    expect(isBalanced("{{[[(())]]}}")).toBe("YES");
});