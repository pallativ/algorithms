const kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(item => item + extraCandies >= max);
};
module.exports = {kidsWithCandies};