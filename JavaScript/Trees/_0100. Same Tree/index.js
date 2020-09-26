/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return version2(p, q);
};

var version2 = function(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false;
    return version2(p.right, q.right) && version2(p.left, q.left);

}

var version1 = function(p, q){
    let arr1 = [];
    let arr2 = [];
    const preOrder = function(root, stack){
        //console.log(stack);
        if(!root) {
            stack.push('$');
            return;
        }
        stack.push(root.val);
        preOrder(root.left, stack);
        preOrder(root.right, stack);
    }


    preOrder(p, arr1);
    preOrder(q, arr2);
    //console.log(arr1.join(""));
    //console.log(arr2.join(""));
    return arr1.join("") === arr2.join("");
}