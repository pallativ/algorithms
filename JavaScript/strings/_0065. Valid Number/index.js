const isNumber = function (s) {
    let numbers = "0123456789";
    let exponent = false;
    let decimalPoint = false;

    let i = 0;
    while (s[i] === ' ') i++;

    if (s[i] === '+' || s[i] === '-')
        i++;

    if (numbers.indexOf(s[i]) === -1)
        return false;

    let decimal = false;
    for (; i < s.length; i++) {
        if (numbers.indexOf(s[i]) === -1)
            break;
        decimal = true;
    }

    if (decimal && s[i] === '.') {
        i++;
        decimalPoint = true;
    }

    if (decimal && s[i] === 'e') {
        i++;
        exponent = true;
    }
    if (exponent === true && (s[i] === '+') || s[i] === '-')
        i++;

    for (; i < s.length; i++) {
        if (numbers.indexOf(s[i]) === -1) {
            break;
        }
        exponent = false;
    }

    if (exponent === true)
        return false;

    if (s[i] === '.') {
        decimalPoint = true;
        i++;
    }


    for (; i < s.length; i++) {
        if (numbers.indexOf(s[i]) === -1) {
            break;
        }
        decimalPoint = false;
    }

    if (decimalPoint === true)
        return false;

    for (; i < s.length; i++) {
        if (s[i] !== ' ')
            return false;
    }
    return true;
};

module.exports = {isNumber}