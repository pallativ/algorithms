
const {mirrorFirstHalf, getNearestPalindromes, findClosestPalindrome} = require("./index");

test("Help tests ", () => {
    expect(getNearestPalindromes("2")).toMatchObject([1n,3n]);
    expect(getNearestPalindromes("9")).toMatchObject([8n,11n]);
    expect(getNearestPalindromes("11")).toMatchObject([9n,22n]);
    expect(getNearestPalindromes("100")).toMatchObject([99n,111n]);
    expect(getNearestPalindromes("209")).toMatchObject([191n,212n]);
});

test("Mirror Function test", () => {
    expect(mirrorFirstHalf("100").toString()).toBe("101");
    expect(mirrorFirstHalf("1000").toString()).toBe("1001");
    expect(mirrorFirstHalf("1001").toString()).toBe("1001");
    expect(mirrorFirstHalf("201").toString()).toBe("202");
    expect(mirrorFirstHalf("209").toString()).toBe("202");
})

test("Large Number", () =>{
    expect(mirrorFirstHalf("807045053224792883").toString()).toBe("807045053350540708");
});

test("Find Closed Palindrome", () => {
    // expect(findClosestPalindrome("100")).toBe("99");
    // expect(findClosestPalindrome("1000")).toBe("999");
    // expect(findClosestPalindrome("201")).toBe("202");
    // expect(findClosestPalindrome("209")).toBe("212");
    expect(findClosestPalindrome("807045053224792883")).toBe("807045053350540708");
})

