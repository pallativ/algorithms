let partitionLabels = function (str) {
    if (str === null || str.length === 0) return null;
    let last_indices = [];
    for (let i = 0; i < 26; i++)
        last_indices[i] = 0;
    for (let i = 0; i < str.length; i++) {
        last_indices[str.charCodeAt(i) - 97] = i;
    }

    let start = 0;
    let end = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        end = Math.max(end, last_indices[str.charCodeAt(i) - 97]);
        if (i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
};

module.exports = {partitionLabels};