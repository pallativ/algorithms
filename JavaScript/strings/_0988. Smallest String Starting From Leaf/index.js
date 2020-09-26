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
 * @return {string}
 */

var smallestFromLeaf = function(root) {
    let stack = [{ value:'', node :  root }]
    let getCharAt = x => 'abcdefghijklmnopqrstuvwxyz'.charAt(x);
    let ans = "";
    while(stack.length){
        let { value, node} = stack.shift();
        let item =  `${getCharAt(node.val)}${value}`;
        if(node.left)
            stack.push({value: item, node: node.left});
        if(node.right)
            stack.push({value: item, node: node.right});
        if(!node.left && !node.right)
        {
            if(ans === "")
                ans = item;
            else if(ans > item)
                ans = item;
        }
    }
    return ans;
};

