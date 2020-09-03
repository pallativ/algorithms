// Here First it failed because of using Array and then after replacing the array with Set it didn't timeout.
function weightedUniformStrings(s, queries) {
    let weightArry = new Set();
    let prevChar = undefined;
    let count = 1;
    //let arr = s.split('');
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let charCode = char.charCodeAt();
        let weight = charCode - 96;
        if (prevChar === char)
            count++;
        else
            count = 1;
        prevChar = char;
        weightArry.add(count * weight);
    }

    for (let query of queries) {
        let flag = weightArry.has(query);;
        result.push(flag ? "Yes" : "No");
    }
    //console.log(weightArry.join(","));
    //console.log(queries.join(","));
    //console.log(result.join('\n'))
    return result;
}


function weightedUniformStrings_v2(s, queries) {
    let weightArry = [];
    let prevChar = undefined;
    let prevItem = {};
    let count = 1;
    //let arr = s.split('');
    let results = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let charCode = char.charCodeAt();
        let weight = charCode - 96;
        if (prevChar === char)
            count++;
        else
            count = 1;
        prevChar = char;
        let searchItem = weightArry.find(t => t.character === char);
        if (searchItem === undefined)
            weightArry.push({ character: char, weight: weight, count: count });
        else {
            searchItem.count = count;
        }
    }
    for (let query of queries) {
        let flag = false;
        for (let item of weightArry) {
            var division = query / item.weight;
            var remainder = query % item.weight;
            if (remainder === 0 && division <= item.count) {
                flag = true;
                break;
            }
        }
        results.push(flag ? "Yes" : "No");
    }
     for (let item of weightArry) {
         console.log(item);
     }
    return results;
}
module.exports = { weightedUniformStrings } 