const addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];
    let d1, d2, sum;
    while (i >= 0 || j >= 0) {
        d1 = i >= 0 ? a[i--] : 0;
        d2 = j >= 0 ? b[j--] : 0;
        sum = parseInt(d1) + parseInt(d2) + carry;
        carry = Math.floor(sum / 2);
        sum = sum % 2;
        result.unshift(sum);
    }
    if (carry > 0)
        result.unshift(carry);
    return result.join("");
}
module.exports = {addBinary}