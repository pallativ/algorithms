// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

let visited_arr = [];
let recursive = function (head) {
    if (head === null) return head;

    let found = visited_arr.find(t => t.key === head);
    if (found)
        return found.value;

    let node = new Node(head.val, null, null);
    visited_arr.push({key: head, value: node});

    node.next = copyRandomList(head.next);
    node.random = copyRandomList(head.random);
    return node;
};

let getCloneNode = function (map, node) {
    if (node === null) return null;
    if (map.has(node))
        return map.get(node);
    else {
        let newNode = new Node(node.val, null, null);
        map.set(node, newNode);
        return newNode;
    }
};

let iterative = function (head) {
    if (head === null) return head;

    let map = new Map();
    let node = new Node(head.val, null, null);
    let oldNodePtr = head;
    let newNodePtr = node;
    map.set(head, node);

    while (oldNodePtr) {
        newNodePtr.next = getCloneNode(map, oldNodePtr.next);
        newNodePtr.random = getCloneNode(map, oldNodePtr.random);

        oldNodePtr = oldNodePtr.next;
        newNodePtr = newNodePtr.next;
    }
    return node;
};

module.exports = {recursive, iterative, Node};
