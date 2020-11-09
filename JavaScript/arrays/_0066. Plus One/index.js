const plusOne = function (digits) {
    let len = digits.length - 1;
    let carry = 1;
    for (let i = len; i >= 0; i--) {
        let posSum = digits[i] + carry;
        carry = Math.floor(posSum / 10);
        digits[i] = posSum % 10;
    }
    if (carry > 0)
        digits.unshift(carry);
    return digits;
};
module.exports = {plusOne};