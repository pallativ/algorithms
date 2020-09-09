class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    addChild(data) {
        this.children.push(new TreeNode(data));
    }
    addNode(node) {
        this.children.push(node);
    }
}

function BreadthFirstTraversal(node) {
    let arr = [node];
    let result = [];
    while(arr.length){
        let node =  arr.shift();
        result.push(node.data);
        arr.push(...node.children);
    }
    return result;
}

module.exports = {BreadthFirstTraversal, TreeNode};