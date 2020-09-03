function getCountsInSet(dict) {
    let set = new Set();
    for (let key in dict) {
        if (dict[key] > 0)
            set.add(dict[key]);
    }
    return set;
}

function isValid(s) {
    let dict = {};
    for (let char of s) {
        if (!dict.hasOwnProperty(char))
            dict[char] = 1;
        else
            dict[char]++;
    }

    if(getCountsInSet(dict).size === 1)
        return "YES";

    for (let key in dict) {
        dict[key]--;
        let set = getCountsInSet(dict);
        if (set.size === 1)
            return "YES";
        dict[key]++;
    }
    return "NO";
}

module.exports = {isValid};