const multiply = function (num1, num2) {
    let carry = 0;
    let result = [];
    if (num1.length > num2.length) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        if (num1[i] === '0') {
            result.push("0");
            continue;
        }

        let temp = "";
        let pos = num1.length - i - 1;
        if (pos > 0)
            temp = "0".repeat(pos);
        carry = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            let d1 = num1[i];
            let d2 = num2[j];
            let posMultiply = (parseInt(d1) * parseInt(d2)) + carry;
            carry = Math.floor(posMultiply / 10);
            posMultiply = posMultiply % 10;
            temp = posMultiply.toString() + temp;
        }
        if (carry > 0)
            temp = carry.toString() + temp;

        result.push(temp);
    }

    //console.log(result.join(","));

    let n1 = result[0];
    for (let i = 1; i < result.length; i++) {
        let n2 = result[i];
        n1 = add(n1, n2);
        //console.log(n1);
    }
    return n1;
};

const add = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = "";
    let carry = 0;
    let posSum = 0;
    while (i >= 0 || j >= 0) {
        let d1 = i >= 0 ? num1[i--] : 0;
        let d2 = j >= 0 ? num2[j--] : 0;
        posSum = parseInt(d1) + parseInt(d2) + carry;
        carry = Math.floor(posSum / 10);
        posSum = posSum % 10;
        result = posSum.toString() + result;
    }
    if (carry > 0)
        result = carry.toString() + result;
    return result;
}


module.exports = {multiply, add}