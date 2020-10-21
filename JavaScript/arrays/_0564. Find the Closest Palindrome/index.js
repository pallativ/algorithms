const mirrorFirstHalf = function (num) {
    let ar = num.split('')
    let mid = Math.floor(num.length / 2);
    ar = [...ar.slice(0, mid), ...(num.length % 2 === 1 ? ar.slice(mid, mid + 1) : ""), ...ar.slice(0, mid).reverse()];
    return BigInt(ar.join(''));
}

const getNearestPalindromes = function(num){
    let result = [];
    let ar = num.split('');
    let mid = Math.floor((ar.length -1)/2);

    /// If the mid element is 0, Here we are making all numbers to '9' from mid to start.
    while(mid >= 0 && ar[mid] === '0'){
        ar[mid] = '9';
        mid--;
    }
    // This below condition for checking numbers 11, 12, 13,...19
    if(mid === 0 && ar[mid] === '1'){
        ar.shift();
        mid = Math.floor((ar.length-1)/2);
        ar[mid] = '9';
    }
    else
        ar[mid] = parseInt(ar[mid]) - 1;
    result.push(mirrorFirstHalf(ar.join('')));


    ar = num.split('');
    mid = Math.floor((ar.length -1)/2);
    while(mid >= 0 && ar[mid] === '9'){
        ar[mid] = '0';
        mid--;
    }

    if(mid < 0){
        ar.unshift('1')
    }
    else {
        ar[mid] = (parseInt(ar[mid])+1).toString();
    }
    result.push(mirrorFirstHalf(ar.join('')));
    return result;
}

const findClosestPalindrome = function (num){
    let number =  BigInt(num);
    let a = mirrorFirstHalf(num);
    let diff1 = Math.abs(Number(number - a));
    if(diff1 === 0)
        diff1 = Number.MAX_VALUE;

    let result = getNearestPalindromes(num);
    let b = result[0];
    let diff2 = Math.abs(Number(number - b));
    if(diff2 === 0)
        diff2 = Number.MAX_VALUE;

    let c = result[1];
    let diff3 = Math.abs(Number(number - c));

    console.log("a:" + a + ";b:" + b + ";c:" +c);
    if(diff2 <= diff1 && diff2 <= diff3)
        return b.toString();
    else if(diff1 <= diff3 && diff1 <= diff1)
        return a.toString();
    else
        return c.toString();
}

module.exports = {mirrorFirstHalf, getNearestPalindromes, findClosestPalindrome}