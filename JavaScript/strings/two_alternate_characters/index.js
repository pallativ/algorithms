function isValid(str) {
    let arr = str.split('');
    for (let i = 1; i < arr.length; i++)
        if (arr[i] === arr[i - 1])
            return false;
    return true;
}
function alternate(str) {
    var arr = str.split('')
    let ans = 0;
    for (let char of arr)
        for (let char1 of arr)
            if (char !== char1) {
                let ansString = [];
                for (let character of arr) {
                    if (character === char || character === char1)
                        ansString.push(character);
                }

                //console.log('AnsString:' + ansString.join(''));
                if (isValid(ansString.join('')))
                {
                    //console.log("Matched");
                    ans = ansString.length > ans ? ansString.length : ans;
                }
            }
    return ans;
}

module.exports = { alternate }