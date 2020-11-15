const decrypt = function (code, k) {
    let result = new Array(code.length).fill(0);
    for (let i = 0; i < code.length; i++) {
        let start = 0, end = 0;
        start = (k >= 0) ? i + 1 : i + code.length + k;
        end = start + Math.abs(k);
        for (; start < end; start++) {
            result[i] += code[start % code.length];
        }
        //console.log(result.join(','));
    }
    return result;
}
module.exports = {decrypt};
