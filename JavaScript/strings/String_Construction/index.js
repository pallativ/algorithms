function stringConstruction(s) {
    let arr = s.split('');
    let p = '';
    let cost = 0;
    for (let char of arr) {
        let index = p.indexOf(char);
        if (index === -1) {
            p += char;
            cost++;
        } else
            p += p.substr(index, 1);
    }
    return cost;
}

function stringConstruction_v2(s) {
    let arr = s.split('');
    let p = '';
    let set = new Set();
    for (let char of arr) {
        set.add(char);
    }
    return set.size;
}

module.exports = {stringConstruction, stringConstruction_v2};