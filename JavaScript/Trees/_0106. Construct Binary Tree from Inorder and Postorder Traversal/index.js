/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let postOrderSubTree = [];
var buildTree = function(inorder, postorder) {
    postOrderSubTree = postorder;
    return helper(inorder);
};

var helper = function(inOrderSubTree){
    if(!postOrderSubTree.length) return null;
    if(!inOrderSubTree.length) return null;

    //console.log("Post:" + postOrderSubTree);
    //console.log("In:" + inOrderSubTree);
    //console.log("********************");
    let value = postOrderSubTree.pop();
    let node = new TreeNode(value);
    let index = inOrderSubTree.indexOf(value);

    node.right = helper(inOrderSubTree.slice(index + 1), postOrderSubTree);
    node.left = helper(inOrderSubTree.slice(0, index), postOrderSubTree);
    return node;
}