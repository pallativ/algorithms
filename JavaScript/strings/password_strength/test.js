const { password_strength, password_strength_v2 } = require('./index')

test("password Strength: aa", () =>{
    expect(password_strength("Ab1")).toBe(3)
    expect(password_strength("#HackerRank")).toBe(1)
    expect(password_strength("4700")).toBe(3)
    expect(password_strength("+0")).toBe(4)
})


test("password Strength Using Version:2", () =>{
    // expect(password_strength_v2("Ab1")).toBe(3)
    // expect(password_strength_v2("#HackerRank")).toBe(1)
    // expect(password_strength_v2("4700")).toBe(3)
    // expect(password_strength_v2("+0")).toBe(4)
})