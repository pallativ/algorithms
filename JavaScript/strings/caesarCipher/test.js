const { caesarCipher } = require('./index')

test("caesarCipher Test", () => {
    expect(caesarCipher("middle-Outz", 2)).toBe("okffng-Qwvb")
    expect(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)).toBe("Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
    
})