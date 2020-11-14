const strongPasswordChecker = function (password) {
    // 1, Given String should be of minimum length 6
    if (password.length < 6)
        return 6 - password.length;

    // 2. Given String should not be more than 20 chars.
    // if (password.length > 20)
    //     return password.length - 20;


    const isUpperCase = function (c) {
        return c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0);
    }

    const isLowerCase = function (c) {
        return c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0);
    }

    const isDigit = function (c) {
        return c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0);
    }


    // 3. Should contain small case, upper case and one digit.
    // 4. It shouldn't have tree consecutive letters.
    let upperCase = false;
    let lowerCase = false;
    let digit = false;

    let consecutiveCount = 0;
    let minimumStep = 3;
    let replaceCount = 0;

    let prev = password[0];
    let deleteCount = password.length > 20 ? password.length - 20 : 0;
    for (let char of password) {
        if (prev === char) {
            consecutiveCount++;
        } else {
            replaceCount += Math.floor(consecutiveCount / 3);
            consecutiveCount = 1;
        }
        prev = char;
        if (isLowerCase(char) && !lowerCase) {
            minimumStep--;
            lowerCase = true;
        } else if (isUpperCase(char) && !upperCase) {
            minimumStep--;
            upperCase = true;
        } else if (isDigit(char) && !digit) {
            minimumStep--;
            digit = true;
        }
    }
    replaceCount += Math.floor(consecutiveCount / 3);
    return Math.max(replaceCount, minimumStep) + deleteCount;
};
module.exports = {strongPasswordChecker}