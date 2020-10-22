const { uniqueMorseRepresentations } = require("./index");

test("Unique Morse Codes - [\"gin\", \"zen\", \"gig\", \"msg\"]", () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2);
});
