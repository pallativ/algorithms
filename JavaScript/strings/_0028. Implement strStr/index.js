const strStr = function (haystack, needle) {
    if (needle === "")
        return 0;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let k = i + 1, j = 1;
            for (; j < needle.length; j++, k++) {
                if (haystack[k] !== needle[j])
                    break;
            }
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;
};
module.exports = {strStr}