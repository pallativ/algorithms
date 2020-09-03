
function pangrams(s) {
    let alphabets = [];
    let count = 0;
    for (let i = 0; i < 26; i++) {
        alphabets[i] = 0;
    }
    let arr = s.split('');
    for (let char of arr) {
        let charCode = char.toUpperCase().charCodeAt();
        let index = charCode % 65;
        if (index < 25 && alphabets[index] != 1) {
            count++;
            alphabets[index] = 1;
        }
        if(count >= 25)
            return "pangram";
    }
    return 'not pangram';
}

module.exports = { pangrams }