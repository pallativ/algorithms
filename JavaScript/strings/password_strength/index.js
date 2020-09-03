function password_strength(password) {
    const arr = password.split('');
    var total = [0, 1, 1, 1, 1];

    let matchBit = 0;
    for (let character of arr) {
        if (character.charCodeAt() >= 48 && character.charCodeAt() <= 57)
            total[1] = 0;
        else if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90)
            total[2] = 0;
        else if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122)
            total[3] = 0;
        else if ("!@#$%^&*()-+".search(character.charCodeAt()))
            total[4] = 0;
    }

    let missing_characters = 0;
    missing_characters = total.reduce((missing_characters, item) => missing_characters + item);

    // This part is little challeging..... 
    let totalNewLength = (missing_characters + arr.length);
    if (totalNewLength < 6)
        missing_characters += (6 - totalNewLength);

    return missing_characters;
}


function password_strength_v2(password) {
    const arr = password.split('');
    let total = [0, 1, 1, 1, 1];

    let matchBit = 0;
    for (let character of arr) {
        if (total[1] === 1 && character.charCodeAt() >= 48 && character.charCodeAt() <= 57) {
            total[1] = 0;
            //matchBit = (matchBit << 1) | 1;
        }
        else if (total[2] === 1 && character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
            total[2] = 0;
            //matchBit = (matchBit << 1) | 1;
        }
        else if (total[3] === 1 && character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
            total[3] = 0;
            //matchBit = (matchBit << 1) | 1;
        }
        else if (total[4] === 1 && "!@#$%^&*()-+".search(character.charCodeAt())) {
            total[4] = 0;
            //matchBit = (matchBit << 1) | 1;
        }
    }

    let missing_characters = 0;
    missing_characters = total.reduce((missing_characters, item) => missing_characters + item);

    // This part is little challeging..... 
    let totalNewLength = (missing_characters + arr.length);
    if (totalNewLength < 6)
        missing_characters += (6 - totalNewLength);

    return missing_characters;
}


module.exports = { password_strength, password_strength_v2 }