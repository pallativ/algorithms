const {TreeNode, insert, inOrder} = require("./index");
test("Testing Binary Tree Insert", () => {
    let root = insert(null, 1);
    insert(root, 4);
    insert(root, 2);
    insert(root, 3);
    console.log(inOrder(root));
});

test("Balanced Binary Tree - Left Imbalanced Tree", () => {
    let root = insert(null, 4);
    root = insert(root, 3);
    root = insert(root, 2);
    console.log(inOrder(root));
});

test("Balanced Binary Tree - Right Imbalanced Tree", () => {
    let root = insert(null, 1);
    root = insert(root, 2);
    root = insert(root, 3);
    console.log(inOrder(root));
});
