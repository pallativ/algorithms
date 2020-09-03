const { reverse, reverse_v2 } = require('./index')

test('Reversing String : ABC', () => {
    expect(reverse("ABC")).toBe("CBA")
    expect(reverse_v2("ABC")).toBe("CBA")
});

test('Reversing String : ABCDEDF', () => {
    expect(reverse("ABCDEF")).toBe("FEDCBA")
    expect(reverse_v2("ABCDEF")).toBe("FEDCBA")
});

test('Reversing Single Letter String : A', () => {
    expect(reverse("A")).toBe("A")
    expect(reverse_v2("A")).toBe("A")
});