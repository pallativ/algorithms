const toLowerCase = function (str) {
    let result = '';
    for(let i=0;i<str.length;i++){
        let charCode =  str.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90)
            result += String.fromCharCode(charCode + 32);
        else
            result += str[i];
    }
    return result;
};
module.exports = {toLowerCase}