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
let ans = 0;
var maxDepth = function(root) {
    ans = 0;
    top_down(root, 1);
    return ans;
};

var top_down = function(root, depth){
    if(!root) return;
    //if(!root.left && !root.right)
    ans = Math.max(ans, depth);
    top_down(root.left, depth+1);
    top_down(root.right, depth+1);
}

var version1 = function(root){
    if(!root) return 0;
    let arr = [root,"$"];
    let maxDepth = 1;
    let curr = null;
    while(arr.length > 1){
        curr = arr.shift();
        if(curr === "$")
        {
            maxDepth++;
            arr.push("$");
        }
        if(curr !== "$" && curr.left) arr.push(curr.left);
        if(curr !== "$" && curr.right) arr.push(curr.right);
    }
    return maxDepth;
}