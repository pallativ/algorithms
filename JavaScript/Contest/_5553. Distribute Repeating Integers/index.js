const canDistribute = function (nums, quantity) {
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num))
            map.set(num, 1);
        else
            map.set(num, map.get(num) + 1);
    }

    const takeEqual = function (customerId) {
        for (let key of map.keys()) {
            if (map.get(key) === quantity[customerId]) {
                map.set(key, map.get(key) - quantity[customerId]);
                result[customerId] = true;
                return true;
            }
        }
        return false;
    }

    const takeGreater = function (customerId) {
        for (let key of map.keys()) {
            if (map.get(key) >= quantity[customerId]) {
                map.set(key, map.get(key) - quantity[customerId]);
                result[customerId] = true;
                return true;
            }
        }
        return false;
    }


    let result = new Array(quantity.length).fill(false);
    quantity.sort((a, b) => b - a);
    for (let customerId = 0; customerId < quantity.length; customerId++) {
        takeEqual(customerId);
    }
    for (let customerId = 0; customerId < quantity.length; customerId++) {
        if (result[customerId] === false)
            takeGreater(customerId);
    }
    for (let item of result) {
        if (item === false)
            return false;
    }
    return true;
};
module.exports = {canDistribute}