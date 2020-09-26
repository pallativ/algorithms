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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return iterative_version2(root);
};


var iterative_version2 = function(root){
    let ans = [];
    let stack = [];
    let t = root;
    while(t || stack.length){
        if(t) {
            stack.push(t);
            t = t.left;
        }
        else {
            t = stack.pop();
            ans.push(t.val);
            t = t.right;
        }
    }
    return ans;
}

var iterative_version1 = function(root){
    let ans = [];
    let stack = [];
    let curr = root;
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
}

var recursive = function(root){
    let ans = [];
    if(!root) return [];
    return [...recursive(root.left), root.val, ...recursive(root.right)];
}