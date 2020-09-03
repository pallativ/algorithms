function getAlphabetRotate(num) {
    let rotateAlphaArr = [];
    for (let i = 0; i <= 25; i++) {
        rotateAlphaArr.push(String.fromCharCode(97 + i));
    }
    for (let i = 0; i < num; i++) {
        rotateAlphaArr.push(rotateAlphaArr.shift());
    }
    console.log(rotateAlphaArr.join(" "));
    return rotateAlphaArr;
}
function caesarCipher(str, k) {
    let arr = str.split('');
    let result = [];
    let rotateAlpha = getAlphabetRotate(k);
    for (let character of arr) {
        let charCode = character.charCodeAt();
        if (charCode >= 65 && charCode <= 90)
            result.push(rotateAlpha[charCode - 65].toUpperCase());
        else if (charCode >= 97 && charCode <= 122)
            result.push(rotateAlpha[charCode - 97]);
        else
            result.push(character);
    }
    return result.join('');
}

module.exports = { caesarCipher }