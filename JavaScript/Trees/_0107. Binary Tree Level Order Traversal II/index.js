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
var levelOrderBottom = function(root) {
    if(!root) return [];
    let stack = [root, "$"];
    let levelNodes = [[]];
    let curr = null;
    while(stack.length > 1){
        curr = stack.shift();
        if(curr === "$"){
            stack.push("$");
            levelNodes.unshift([]);
            continue;
        }
        levelNodes[0].push(curr.val);
        if(curr.left)
            stack.push(curr.left);
        if(curr.right)
            stack.push(curr.right);
    }
    return levelNodes;
};