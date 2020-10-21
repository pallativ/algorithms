const balancedStringSplit = function (s) {
    let p = s[0] === 'R' ? 1 : -1;
    let result = 0;
    for (let i = 1; i < s.length; i++) {
        result += p === 0 ? 1 : 0;
        p += s[i] === 'R' ? 1 : -1;
    }
    if(p === 0)
        result++
    return result;
};
module.exports = {balancedStringSplit}
