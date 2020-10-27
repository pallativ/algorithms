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
    if (balance > 1) {
        if (getHeight(root.left.left) > getHeight(root.left.right))
            return rightRotate(root);
        else {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }
    }
    if (balance < -1){
        if(getHeight(root.right.right) > getHeight(root.right.left))
            return leftRotate(root);
        else {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }
    }
    return root;
}
const rightRotate = function (nodeA) {
    let nodeB = nodeA.left;
    let nodeD = nodeB.right;

    nodeB.right = nodeA;
    nodeA.left = nodeD;
    nodeA.height = Math.max(getHeight(nodeA.left), getHeight(nodeA.right)) + 1;
    nodeB.height = Math.max(getHeight(nodeB.left), getHeight(nodeB.right)) + 1;
    return nodeB;
}

const leftRotate = function (nodeA) {
    let nodeB = nodeA.right;
    let nodeD = nodeB.left;

    nodeB.left = nodeA;
    nodeA.right = nodeD;

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

module.exports = {TreeNode, insert, inOrder, getBalance}