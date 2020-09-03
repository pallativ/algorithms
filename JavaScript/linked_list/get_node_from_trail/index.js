class SingleLinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next === undefined ? null : next;
    }
}

function getNode(head, positionFromTrail) {
    let curr = head;
    let length = 0;
    while (curr) {
        curr = curr.next;
        length++;
    }
    let actualPosition = length - positionFromTrail;
    curr = head;
    while (actualPosition > 1 && curr) {
        curr = curr.next;
        actualPosition--;
    }
    return curr.data;
}

module.exports = {SingleLinkedListNode, getNode};