function reverse(head) {
    if (!head) return head;
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    let newHead = arr.pop();
    curr = newHead;
    while (arr.length) {
        let nextNode = arr.pop();
        nextNode.next = null;
        curr.next = nextNode;
        curr = curr.next;
    }
    return newHead;
}

function reverse_v1(head) {
    if(head === null || head.next === null) return head;
    let newHead = reverse_v1(head.next);
    head.next.next = head;
    head.next = null;
    return newHead; 
}

module.exports = { reverse, reverse_v1 };
