const morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
    "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
const uniqueMorseRepresentations = function (words) {
    const getMorseForWord = function (word) {
        let code = 0;
        let ans = '';
        for (let i = 0; i < word.length; i++) {
            code = word.charCodeAt(i) - 97;
            ans += morseCodes[code];
        }
        return ans;
    }

    let map = {};
    for (let word of words) {
        let morseCode = getMorseForWord(word);
        if(!map[morseCode])
            map[morseCode] = 1;
    }
    //console.log(map);
    return Object.keys(map).length;
};
module.exports = {uniqueMorseRepresentations}