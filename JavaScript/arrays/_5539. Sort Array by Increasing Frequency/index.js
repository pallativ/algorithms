const frequencySort = function (nums) {
    let freqMap = [];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        let index = freqMap.findIndex(t => {
            return t.num === val;
        });
        if (index === -1)
            freqMap.push({num: val, freq: 1});
        else
            freqMap[index].freq++;
    }
    freqMap.sort((a, b) => {
        if (a.freq === b.freq)
            return b.num - a.num;
        return a.freq - b.freq;
    });

    let result = [];
    for (let item of freqMap) {
        let ar = new Array(item.freq).fill(item.num);
        result.push(...ar);
    }
    return result;

};
module.exports = {frequencySort}