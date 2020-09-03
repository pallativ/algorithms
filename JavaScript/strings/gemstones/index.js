function gemstones(arr) {
    let dict = {};
    let index = 0;
    for (let str of arr) {
        index++;
        //console.log(str);
        for (let k = 0; k < str.split('').length; k++) {
            let char = str[k];
            if (!dict.hasOwnProperty(char)) {
                let set = new Set();
                set.add(index);
                dict[char] = set;
            } else {
                let set = dict[char];
                if (!set.has(index))
                    set.add(index);
            }
        }
    }
    let count = 0;
    for (let key in dict) {
        if(dict[key].size === arr.length)
            count++;
    }
    return count;
}



module.exports = {gemstones};