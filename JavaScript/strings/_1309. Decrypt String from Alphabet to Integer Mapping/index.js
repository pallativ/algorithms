const alphabets = "abcdefghijklmnopqrstuvwxyz";
const freqAlphabets = function (s) {
    let result = '';
    let digit = '';
    for (let i = s.length - 1; i >= 0; i--) {
        digit = '';
        if (s[i] === '#') {
            digit = s[--i];
            digit = s[--i] + digit;
        } else
            digit += s[i];
        result = alphabets[parseInt(digit) - 1] + result;
    }
    return result;
}

module.exports = {freqAlphabets};