const isPalindrome = function (s, start, end) {
    for (let k = start; k <= start + (end - start) / 2; k++) {
        if (s[k] !== s[end + start - k]) return false;
    }
    return true;
}
const validPalindrome = function (str) {
    for (let i = 0; i < str.length; i++) {
        let j = str.length - 1 - i;
        if (str[i] !== str[j]) {
            return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1);
        }
    }
    return true;
};
module.exports = {validPalindrome};