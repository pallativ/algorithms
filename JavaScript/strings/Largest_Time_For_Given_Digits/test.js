const {getPermutations, longestTime} = require("./index");

test("Get Permutations", () => {
    let ans = getPermutations("ABCDE", 0);
    console.log(ans);
    console.log(ans.length);
});

test("Get Longest Time", () => {
    let ans = longestTime([1,2,3,4].join(''));
    console.log(ans);
});

test("Get Longest Time for Invalid string ", () => {
    let ans = longestTime([5,5,5,5].join(''));
    console.log(ans);
});