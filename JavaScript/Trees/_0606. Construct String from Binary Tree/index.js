/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    let preOrder = function(root){
        if(!root) return "";
        if(!root.left && !root.right)
            return root.val + "";
        if(root.right)
            return root.val + "(" + preOrder(root.left) + ")(" + preOrder(root.right) + ")";
        else
            return `${root.val}(${preOrder(root.left)})`;
    }
    return preOrder(t);
};