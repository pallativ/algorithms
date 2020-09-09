const {TreeNode, BreadthFirstTraversal} = require("./index");

function buildTree(levels, noOfChildren) {
    let root = new TreeNode(10);
    let level1 = [root];
    for (let i = 0; i < levels; i++) {
        let array = [];
        while(level1.length) {
            let parent = level1.shift();
            for (let j = 0; j < noOfChildren; j++) {
                let child = new TreeNode(Math.floor(Math.random() * 100));
                parent.addNode(child);
                array.push(child);
            }
        }
        level1.push(...array);
    }
}


describe("Tree Traversal", () => {
    // build Tree


    test("Breadth First Traversal", () => {
        expect(1).toBe(1);
    })
});