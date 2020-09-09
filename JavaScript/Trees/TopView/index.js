function TopView(node) {
    let level = 0;
    let result = [[node.data]];
    let arr = [node, 0];
    while (arr.length) {
        let queueNode = arr.shift();
        if (node.left) {
            result[queueNode.level - 1].push(node.left.data);
            ans.push({queueNode.level - 1, node.left});
        }
        if (node.right) {
            result[queueNode.level + 1].push(node.left.data);
            ans.push({queueNode.level + 1, node.right});
        }
    }
}