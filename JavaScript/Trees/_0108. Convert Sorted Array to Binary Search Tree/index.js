/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const helper = function(left ,right){
        if(left > right) return null;
        // console.log("Ceil:" + Math.ceil((left+right)/2));
        // console.log("Floor:" + Math.floor((left+right)/2));
        // console.log(".....");
        let leftMiddle = Math.ceil((left+right)/2);
        let root = new TreeNode(nums[leftMiddle]);
        root.left = helper(left, leftMiddle-1);
        root.right = helper(leftMiddle+1, right);
        return root;
    }
    return helper(0, nums.length -1);
 };
 