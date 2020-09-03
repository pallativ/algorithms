const {getSubString, twoStrings, twoStrings_v2} = require('./index');

test("Test SubString(hello,world)", () =>{
    expect(twoStrings("hello", "world")).toBe("YES");
    expect(twoStrings_v2("hello", "world")).toBe("YES");
});

test("Test SubString(hi,world)", () =>{
    expect(twoStrings("hi", "world")).toBe("NO");
    expect(twoStrings_v2("hello", "world")).toBe("YES");
})