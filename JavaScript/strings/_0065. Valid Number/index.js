const isNumber = function (s) {
    let ar = s.split('');

    const removePrefixSpaces = function () {
        while (ar.length && isSpace(ar[0])) {
            ar.shift();
        }
    }

    const removeTrailingSpaces = function () {
        while (ar.length && isSpace(ar[ar.length - 1])) {
            ar.pop();
        }
    }

    const isDigit = (c) => (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57);
    const isSpace = (c) => c.charCodeAt(0) === 32;

    const removeDigits = function () {
        // Remove Sign

        if (!isDigit(ar[0]))
            return false;

        while (ar.length && isDigit(ar[0]))
            ar.shift();

        if (ar[0] === '.') {
            ar.shift();
            if (ar.length === 0)
                return false;
            while (ar.length && isDigit(ar[0]))
                ar.shift();
        }
        return true;
    }

    removePrefixSpaces();
    removeTrailingSpaces();

    // All Spaces, no Numbers.
    if (ar.length === 0)
        return false;

    if (ar[0] !== '+' && ar[0] !== '-' && ar[0] !== '.' && !isDigit(ar[0]))
        return false;

    if (ar[0] === '+' || ar[0] === '-' || ar[0] === '.')
        ar.shift();

    /// Scanning numbers.
    let length = ar.length;
    if (!removeDigits())
        return false;

    /// No Numbers found.
    if (length === ar.length)
        return false;

    /// There is no exponent.
    if (ar.length === 0)
        return true;

    /// Is there is no exponent, you won't reach here
    if (ar[0] !== 'e')
        return false;
    else {
        ar.shift();
        if (ar.length === 0)
            return false;
        if (ar[0] !== '+' && ar[0] !== '-' && !isDigit(ar[0]))
            return false;
        removeDigits();
    }
    return ar.length === 0;
};

module.exports = {isNumber}