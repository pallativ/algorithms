const isNumber = function (s) {
    const isDigit = (c) => (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57);

    const trimLeft = function (part) {
        while (part.length && part[0] === ' ') {
            part.shift();
        }
    }

    const trimRight = function (part) {
        while (part.length && part[part.length - 1] === ' ') {
            part.pop();
        }
    }

    const isValidNumber = function (num, numbers) {
        let ar = num.split('');
        let leastOneDigit = false;
        while (ar.length) {
            if (numbers.indexOf(ar[0]) === -1)
                return false;
            if (ar[0] === '+' || ar[0] === '-') {
                delete numbers[numbers.indexOf('+')];
                delete numbers[numbers.indexOf('-')];
            } else if (ar[0] === '.') {
                delete numbers[numbers.indexOf('+')];
                delete numbers[numbers.indexOf('-')];
                delete numbers[numbers.indexOf('.')];
            } else if (isDigit(ar[0])) {
                delete numbers[numbers.indexOf('+')];
                delete numbers[numbers.indexOf('-')];
                leastOneDigit = true;
            }
            ar.shift();
        }
        return leastOneDigit;
    }

    let validChars = "0123456789+-.";
    let temp = s.split('');
    trimLeft(temp);
    trimRight(temp);
    let ar = temp.join('').split('e');

    if (ar.length > 2)
        return false;

    if (ar[0].length === 0)
        return false;

    if (!isValidNumber(ar[0], validChars.split('')))
        return false;

    if (ar.length > 1 && !isValidNumber(ar[1], validChars.replace(".", '').split('')))
        return false;
    return true;
}
module.exports = {isNumber}