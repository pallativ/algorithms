/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [];
    for(let i =0; i<nums.length; i++){
        let x = ans.indexOf(nums[i]);
        if(x > -1)
            return [x, i];
        ans.push(target - nums[i]);
    }
};