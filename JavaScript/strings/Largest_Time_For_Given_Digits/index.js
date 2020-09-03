let A = [0, 0, 0, 0, 0, 0, 0, 0];
let result = [];
let permutations = [];

function getPermutations(s, k) {
    if (s.length === k)
        permutations.push(result.join(""));
    else {
        for (let i = 0; i < s.length; i++) {
            if (A[i] === 0) {
                result[k] = s[i];
                A[i] = 1;
                getPermutations(s, k + 1);
                A[i] = 0;
            }
        }
    }
    return permutations;
}

function longestTime(s) {
    let permutations_local = getPermutations(s, 0);
    let maxTime = "0000";
    let atleast_one_valid = false;
    for (let item of permutations_local) {
        let hours = item[0] + item[1];
        let minutes = item[2] + item[3];
        let hh = parseInt(hours);
        let mm = parseInt(minutes);
        if (hh < 24 && mm < 60) {
            atleast_one_valid = true;
            maxTime = parseInt(maxTime) < parseInt(hours + minutes) ? item : maxTime;
        }
    }
    if (atleast_one_valid) {
        return maxTime.substr(0, 2) + ":" + maxTime.substr(2, 2);
    }
    return "";
}

// function longestTime_v1(s) {
//     for (let i = 0; i < s.length; i++)
//         for (let j = 0; j < s.length; i++)
//             for (let k = 0; k < s.length; k++) {
//                 if (i === j || j === k || k === i) continue;
//                 let
//
//             }
// }


module.exports = {getPermutations, longestTime};