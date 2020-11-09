const addToArrayForm = function (A, K) {
    let B = K.toString().split('');
    let i = A.length - 1;
    let j = B.length - 1;
    let d1, d2, sum, carry = 0;
    let result = [];
    while (i >= 0 || j >= 0) {
        d1 = i >= 0 ? A[i--] : 0;
        d2 = j >= 0 ? B[j--] : 0;
        sum = parseInt(d1) + parseInt(d2) + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        result.unshift(sum);
    }
    if (carry > 0)
        result.unshift(carry);
    return result;
};
module.exports = {addToArrayForm}