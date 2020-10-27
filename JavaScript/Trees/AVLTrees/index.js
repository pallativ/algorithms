let TreeNode = function (val, left, right) {
    this.val = val;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
    this.height = 1;
}

const insert = function (root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (root.val > val)
        root.left = insert(root.left, val);
    else if (root.val < val)
        root.right = insert(root.right, val);
    root.height = Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    let balance = getBalance(root);
    if (balance > 1 && val < root.left.val)
        return rightRotate(root);
    return root;
}
const rightRotate = function (nodeA) {
    let nodeB = nodeA.left;
    let nodeC = nodeB.right;

    nodeB.right = nodeA;
    nodeA.left = nodeC;
    nodeA.height = Math.max(getHeight(nodeA.left), getHeight(nodeA.right)) + 1;
    nodeB.height = Math.max(getHeight(nodeB.left), getHeight(nodeB.right)) + 1;
    return nodeB;
}

const getHeight = function (node) {
    if (!node) return 0;
    return node.height;
}

const getBalance = function (node) {
    if (!node) return 0;
    return getHeight(node.left) - getHeight(node.right);
}


const inOrder = function (root) {
    if (!root) return [];
    return [...inOrder(root.left), root.val, ...inOrder(root.right)];
}

module.exports = {TreeNode, insert, inOrder}