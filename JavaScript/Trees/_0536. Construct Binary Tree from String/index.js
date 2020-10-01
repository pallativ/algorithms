/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    let ar = s.split('');
    const isDigit = function(item){
        let charCode =  item.charCodeAt(0);
        return  charCode >= 48 && charCode <= 57;
    }
   
    const convertToStack = function(ar){
        let stack = [];
        let prev = null;
        for(let item of ar){
            if(prev === "-" && isDigit(item)) {
               stack.pop();
               stack.push(-parseInt(item));
            }
            else if(prev && isDigit(prev) && isDigit(item)){
                prev = stack.pop();
                stack.push((prev * 10) + (Math.sign(prev) * parseInt(item)));
            }
            else
                stack.push(isDigit(item) ? parseInt(item) : item);
            prev = item;
        }
        return stack;
    }
    let stack = convertToStack(ar)
    
    const construct = function(stack){
        if(!stack.length) return null;
        var tempStack = [];
        let rootNode = new TreeNode(stack.shift());
        let p = 0;
        do{
            var item = stack.shift();
            tempStack.push(item);
            if(item === "(") 
               p++;
           else if(item === ")")
               p--;
        }while( p != 0)
        tempStack.shift();
        tempStack.pop();
        rootNode.left = construct(tempStack);
        stack.shift();
        stack.pop();
        rootNode.right = construct(stack);
        return rootNode;
    }
    return construct(stack);
};