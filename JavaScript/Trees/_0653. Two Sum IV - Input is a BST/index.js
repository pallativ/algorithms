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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let ar = [];
    const preOrder = function(root, k){
        if(!root) return false;
        //console.log(ar +":" + root.val + ":" + ar.includes(root.val));
        if(ar.includes(root.val))
            return true;
        ar.push(k - root.val);
        return preOrder(root.left, k) || preOrder(root.right, k);
    }
    return preOrder(root, k);
};