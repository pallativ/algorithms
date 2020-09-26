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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let queue = [root, root];
    while(queue.length){
        let n1 = queue.shift();
        let n2 = queue.shift();
        if(!n1 && !n2) continue;
        if(!n1 || !n2) return false;
        if(n1.val !== n2.val) return false;
        queue.push(n1.left);
        queue.push(n2.right);
        queue.push(n1.right);
        queue.push(n2.left);
    }
    return true;
};