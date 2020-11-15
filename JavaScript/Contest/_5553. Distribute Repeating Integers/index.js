const canDistribute = function (nums, quantity) {
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num))
            map.set(num, 1);
        else
            map.set(num, map.get(num) + 1);
    }
    let counts = [];
    for (let key of map.keys()) {
        counts.push(map.get(key));
    }
    counts.sort((a, b) => a - b);
    quantity.sort((a, b) => b - a);

    const solve = function (customerId) {
        if (customerId >= quantity.length)
            return true;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] >= quantity[customerId]) {
                counts[i] -= quantity[customerId];
                if (solve(customerId + 1)) {
                    return true;
                }
                counts[i] += quantity[customerId];
            }
        }
        return false;
    }

    return solve(0);

};
module.exports = {canDistribute}