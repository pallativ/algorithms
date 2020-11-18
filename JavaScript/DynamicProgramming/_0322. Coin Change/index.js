const coinChange = function (coins, amount) {
    const coinChangeRecursive = function (remaining) {
        if (remaining === 0)
            return 0;
        if (remaining < 0)
            return -1;
        if (counts[remaining - 1] !== 0)
            return counts[remaining - 1];
        let min = Number.MAX_VALUE;

        /// For every remaining, we need to try all denominations.
        for (let coin of coins) {
            tree.unshift({sum: remaining, rem: remaining - coin, coin: coin});
            let res = coinChangeRecursive(remaining - coin);
            if (res >= 0 && min > res) {
                min = 1 + res;
            }
        }
        counts[remaining - 1] = (min === Number.MAX_VALUE) ? -1 : min;
        return counts[remaining - 1];
    }

    if (amount < 1)
        return 0;

    // let usedCoinsCount = new Array(amount).fill(0);
    let counts = new Array(amount).fill(0);
    let tree = [];

    let result = coinChangeRecursive(amount);
    // let output = "";
    // for (let i = 0; i < counts.length; i++) {
    //     if (counts[i] !== 0 && counts[i] !== -1) {
    //         output += (`${i}->${counts[i]}\n`);
    //     }
    // }
    // console.log(usedCoinsCount);

    //console.log(tree);
    return result;
}

module.exports = {coinChange}