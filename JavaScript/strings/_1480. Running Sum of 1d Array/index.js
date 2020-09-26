/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ans = [];
    for(let num of nums){
        if(ans.length === 0)
            ans.push(num);
        else
            ans.push(ans[ans.length-1] + num);
    }
    return ans;
};