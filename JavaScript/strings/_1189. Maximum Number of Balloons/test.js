const { maxNumberOfBalloons } = require("./index");

test("Max Ballons - nlaebolko", () => {
    expect(maxNumberOfBalloons("nlaebolko")).toBe(1);
});

test("Max Ballons - loonbalxballpoon", () => {
    expect(maxNumberOfBalloons("loonbalxballpoon")).toBe(2);
});

test("Max Ballons - leetcode", () => {
    expect(maxNumberOfBalloons("leetcode")).toBe(0);
});

test("Max Ballons - \"balon\"", () => {
    expect(maxNumberOfBalloons("balon")).toBe(0);
});

test("Max Ballons - Long String", () => {
    expect(maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"))
        .toBe(10);
});




