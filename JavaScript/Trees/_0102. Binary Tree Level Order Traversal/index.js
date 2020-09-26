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
var levelOrder = function(root) {
    return levelOrder2(root);
};

var levelOrder2 = function(root){
    if(!root) return [];
    let ans = [];
    let arr = [root];
    while(arr.length){
        let size = arr.length;
        let subAns = [];
        for(let i=0; i < size; i++){
            let curr = arr.shift();
            subAns.push(curr.val);
            if(curr.left) arr.push(curr.left);
            if(curr.right) arr.push(curr.right);
        }
        ans.push(subAns);
    }
    return ans;
}


var levelOrder1 = function(root){
    if(!root) return  [];
    let ans = [[]];
    let arr = [root, '$'];
    let curr = null;
    while(arr.length > 1){
        curr = arr.shift();
        //console.log(curr);
        if(curr === '$') {
            //console.log("Level Complete");
            arr.push(curr);
            ans.push([]);
        }
        else
            ans[ans.length - 1].push(curr.val);

        if(curr.left) arr.push(curr.left);
        if(curr.right) arr.push(curr.right);
    }
    return ans;
}