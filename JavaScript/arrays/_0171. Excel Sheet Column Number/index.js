const titleToNumber = function(s) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let power = 0;
    let result = 0;
    for(let i = s.length-1; i >=0; i--){
        let digit = (alphabets.indexOf(s[i]) + 1) * Math.pow(26,power++);
        //console.log(digit);
        result += digit;
    }
    return result;
};