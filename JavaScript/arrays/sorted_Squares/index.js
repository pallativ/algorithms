/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortedSquares = function (A) {
    let result = [];
    for (let num of A) {
        result.push(num * num);
    }
    result.sort(function (a, b) {
        return a - b;
    });
    console.log(result);
    return result;
};
module.exports = {sortedSquares};