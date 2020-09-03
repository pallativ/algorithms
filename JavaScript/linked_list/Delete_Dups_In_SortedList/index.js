function removeDuplicates(head) {
    let curr = head;
    let prev = undefined;
    while (curr) {
        if (prev !== undefined && prev.data === curr.data)
            prev.next = curr.next;
        else
            prev = curr;
        curr = curr.next;
    }
    return head;
}

module.exports = {removeDuplicates};