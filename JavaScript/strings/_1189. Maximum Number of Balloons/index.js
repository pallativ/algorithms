const maxNumberOfBalloons = function (text) {
    let map = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0};
    let char = '';
    for (let i = 0; i < text.length; i++) {
        char = text[i];
        if (map[char.toString()] !== undefined)
            map[char.toString()]++;
    }
    map['o'] = Math.floor(map['o'] / 2);
    map['l'] = Math.floor(map['l'] / 2);
    let result = Number.MAX_VALUE;
    for (let key in map) {
        result = Math.min(result, map[key]);
    }
    return result;
};

module.exports = {maxNumberOfBalloons}