const areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length)
        return false;
    let dict = [];
    for (let map of similarPairs) {
        let [key, value] = map;
        dict.push(key + "#" + value);
    }
    for (let i = 0; i < sentence1.length; i++) {
        if (sentence1[i] !== sentence2[i] &&
            dict.indexOf(sentence1[i] + '#' + sentence2[i]) === -1 &&
            dict.indexOf(sentence2[i] + '#' + sentence1[i]) === -1)
            return false;
    }
    return true;
};
module.exports = {areSentencesSimilar}
