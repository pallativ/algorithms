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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let leftToRight = true;
    let stack = [root, "$"];
    let item = null;
    let ans = [[]];
    while(stack.length > 1){
        item = stack.shift();
        if(item === "$"){
            stack.push("$");
            ans.push([]);
            leftToRight = !leftToRight;
            continue;
        }
        if(leftToRight)
             ans[ans.length - 1].push(item.val);
        else
             ans[ans.length-1].unshift(item.val);
        if(item.left)
            stack.push(item.left);
        if(item.right)
            stack.push(item.right);
    }
    return ans;
};