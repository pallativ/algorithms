const lengthOfLastWord = function(s) {
    let lastSpaceIndex = -1;
    let result = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === ' ')
            lastSpaceIndex = i;
        else
            result = i - lastSpaceIndex;
    }
    return result;
};
module.exports = { lengthOfLastWord }