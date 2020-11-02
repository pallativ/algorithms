function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const insertionSortList = function (head) {
    let dummy = new ListNode();
    let prevNode, nextNode, currNode = head;
    while (currNode) {
        prevNode = dummy;
        nextNode = dummy.next;
        while (nextNode) {
            if (currNode.val < nextNode.val)
                break;
            nextNode = nextNode.next;
        }

        nextNode.next = currNode;
        currNode = currNode.next;
    }
};

module.exports = {insertionSortList}