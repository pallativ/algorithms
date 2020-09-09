let repeatedSubstringPattern = function (s) {
    let length =  s.length;
    for (let i = 1; i <=  length/ 2; i++) {
        if (length % i !== 0) continue;
        let substr = s.substr(0, i);
        let repeats = length / i;
        let repeatedString = substr.repeat(repeats);
        if (repeatedString === s) return true;
    }
    return false;
};

module.exports = {repeatedSubstringPattern};