function alternatingCharacters(s) {
    let prev_char_code = undefined;
    let count = 0;
    for (let char of s) {
        if (prev_char_code === char)
            count++;
        prev_char_code = char;
    }
    return count;
}

module.exports = {alternatingCharacters};