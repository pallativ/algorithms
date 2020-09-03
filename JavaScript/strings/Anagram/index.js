function anagram(str) {
    if (str.length % 2 !== 0)
        return -1;
    let mid_point = str.length / 2;

    let str1 = str.substr(0, mid_point);
    let str2 = str.substr(mid_point);

    let count = 0;
    for (let charCode of str1) {
        let index = str2.indexOf(charCode);
        if (index === -1)
            count++;
        else
            str2 = str2.substr(0, index) + str2.substr(index + 1);
        console.log(str2);
    }
    // console.log(str1);
    // console.log(str2);
    return count;
}

function anagram_v2(str) {
    if (str.length % 2 !== 0)
        return -1;
    let mid_point = str.length / 2;

    let str1 = str.substr(0, mid_point);
    let str2 = str.substr(mid_point);

    console.log(str1);
    console.log(str2);

    let count = 0;
    for (let charCode of str1) {
        let index = str2.indexOf(charCode);
        if (index === -1)
            count++;
        else
            str2 = str2.substr(0, index) + str2.substr(index + 1);
    }

    return count;
}

module.exports = {anagram};