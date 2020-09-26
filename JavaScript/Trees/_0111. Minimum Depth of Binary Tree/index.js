/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let ans = Number.MAX_VALUE;
var minDepth = function(root) {
    if(!root) return 0;
    // console.log(root.val);
    if(!root.left) return minDepth(root.right) + 1;
    if(!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left) , minDepth(root.right))+1;
//     let leftDepth = minDepth(root.left);
//     let rightDepth = minDepth(root.right);
//     value = Math.max(leftDepth, rightDepth) + 1;

//     console.log("Node:" + root.val + ";  Height:" + value + ";left:" +  leftDepth + ";right:" + rightDepth);
//     return value;
};