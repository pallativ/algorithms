class ListNode {
    constructor(value, next) {
        this.val = value === undefined ? 0 : value;
        this.next = next === undefined ? null : next;
    }
}

function addAtEnd(arr) {
    let curr = null;
    let prevNode = null;
    for (let item of arr) {
        console.log(item);
        let node = new ListNode(item);
        if (curr === null)
            curr = node;
        else
            prevNode.next = node;
        prevNode = node;
    }
    return curr;
}

module.exports = {addAtEnd};