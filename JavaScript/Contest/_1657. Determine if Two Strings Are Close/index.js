const closeStrings = function (word1, word2) {
    const getMap = function (word) {
        let map = new Map();
        for (let char of word) {
            if (!map.has(char))
                map.set(char, 1);
            else
                map.set(char, map.get(char) + 1);
        }
        return map;
    }

    const isClose = function (map1, map2) {
        let counts1 = [...map1.values()];
        let keys1 = [...map1.keys()];

        let counts2 = [...map2.values()];
        let keys2 = [...map2.keys()];

        counts1 = counts1.sort((a, b) => a - b);
        counts2 = counts2.sort((a, b) => a - b);

        keys1 = keys1.sort((a, b) => a.localeCompare(b));
        keys2 = keys2.sort((a, b) => a.localeCompare(b));

        return counts1.join('') === counts2.join('') && keys1.join('') === keys2.join('');
    }

    let map1 = getMap(word1);
    let map2 = getMap(word2);
    return isClose(map1, map2);
};
module.exports = {closeStrings}