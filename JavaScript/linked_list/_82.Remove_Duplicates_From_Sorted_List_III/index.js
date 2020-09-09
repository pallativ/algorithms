const { ListNode } = require("../Operations/design_linked_list");

let deleteDuplicates = function (head) {
    let prev = new ListNode(0, head);
    let newHead = prev;
    let curr = head;
    let flag = false;
    while (curr && curr.next) {
        // console.log("Previous Next:" + prev.next.val);
        // console.log("Current Next" + curr.next.val);
        // console.log("********");
        if (prev.next.val === curr.next.val)
            flag = true;
        else {
            if (flag)
                prev.next = curr.next;
            else
                prev = curr;
            flag = false;
        }
        curr = curr.next;
    }
    if (flag)
        prev.next = curr.next;
    return newHead.next;
};

module.exports = {deleteDuplicates};