const {replaceWords} = require('./index')
test("Input: dictionary = [\"cat\",\"bat\",\"rat\"], sentence = \"the cattle was rattled by the battery\"", () => {
    let result = replaceWords(["cat","bat","rat"],"the cattle was rattled by the battery");
    expect(result).toBe("the cat was rat by the bat");
});

test("Input: dictionary = [\"a\",\"b\",\"c\"], sentence = \"aadsfasf absbs bbab cadsfafs\"", () => {
    let result = replaceWords(["a","b","c"],"aadsfasf absbs bbab cadsfafs");
    expect(result).toBe("a a b c");
});


test("Input: dictionary = [\"a\", \"aa\", \"aaa\", \"aaaa\"], sentence = \"a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa\"", () => {
    let result = replaceWords(["a", "aa", "aaa", "aaaa"],"a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa");
    expect(result).toBe("a a a a a a a a bbb baba a");
});

test("Input: dictionary = [\"catt\",\"cat\",\"bat\",\"rat\"], sentence = \"the cattle was rattled by the battery\"", () => {
    let result = replaceWords(["catt","cat","bat","rat"],"the cattle was rattled by the battery");
    expect(result).toBe("the cat was rat by the bat");
});