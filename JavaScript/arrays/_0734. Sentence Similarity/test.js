const {areSentencesSimilar} = require('./index')
test("Sentance Similarity - 1", () => {
    let similarPairs = [["great", "fine"], ["drama", "acting"], ["skills", "talent"]];
    let result = areSentencesSimilar(["great", "acting", "skills"], ["fine", "drama", "talent"],
        similarPairs);
    expect(result).toBe(true);
});

test("Sentance Similarity - 2", () => {
    let s1 = ["great"];
    let s2 = ["great"];
    let similarPairs = [];
    let result = areSentencesSimilar(s1, s2, similarPairs);
    expect(result).toBe(true);
});

test("Sentance Similarity - 3", () => {
    let s1 = ["great"];
    let s2 = ["doubleplus", "good"];
    let similarPairs = [["great", "doubleplus"]];
    let result = areSentencesSimilar(s1, s2, similarPairs);
    expect(result).toBe(false);
});


test("Sentance Similarity - 3", () => {
    let s1 = ["an","extraordinary","meal"];
    let s2 = ["a","good","dinner"];
    let similarPairs = [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]];
    let result = areSentencesSimilar(s1, s2, similarPairs);
    expect(result).toBe(false);
});




