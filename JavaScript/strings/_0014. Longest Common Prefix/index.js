const longestCommonPrefix = function (strs) {
    let smallest_string_length = Number.MAX_VALUE;

    /// Find the smallest String length
    for (let str of strs) {
        smallest_string_length = Math.min(str.length, smallest_string_length);
    }

    if(smallest_string_length === Number.MAX_VALUE)
        return "";

    let char = '';
    let j= 0;
    let ans = '';
    for (let i = 0; i < smallest_string_length; i++) {
        char = strs[0][i];
        for (j = 1; j < strs.length; j++) {
            if(char !== strs[j][i]){
                return ans;
            }
        }
        if(j === strs.length)
            ans += char;
    }
    return ans;


};
module.exports = {longestCommonPrefix}