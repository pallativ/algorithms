const calculateTime = function(keyboard, word) {
    let prevPos = 0;
    let currPos = 0;
    let result = 0;
    for(let i=0;i<word.length; i++){
        currPos = keyboard.indexOf(word[i]);
        result += Math.abs(prevPos - currPos);
        prevPos = currPos;
    }
    return result;
};

module.exports = { calculateTime }