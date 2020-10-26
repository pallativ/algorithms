const convertToTitle = function (n) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let r = 0;
    let result = [];
    while (n !== 0) {
        r = (--n) % 26;
        result.unshift(alphabets[r]);
        n = Math.floor(n / 26);
        //console.log("r:" + r + "num:" + n);
    }
    //console.log(n);
    result.unshift(alphabets[n - 1]);
    return result.join('');
};
module.exports = {convertToTitle};