/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let build = function(inOrderSubTree){
        if(!preorder.length) return null;
        if(!inOrderSubTree.length) return null;

        let value = preorder.shift();
        let node = new TreeNode(value);
        let index = inOrderSubTree.indexOf(value);

        node.left = build(inOrderSubTree.slice(0, index), preorder);
        node.right = build(inOrderSubTree.slice(index + 1), preorder);
        return node;
    }
    return build(inorder);
};