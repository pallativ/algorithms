const {insertionSortList} = require("./index");

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

test("Test Insertion Sort - 1", () => {
    let head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(1);
    head.next.next.next.next.next = new ListNode(100);
    head.next.next.next.next.next.next = new ListNode(-1);
    insertionSortList(head);
})

test("Test Insertion Sort -1", () => {
    let head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(100);
    insertionSortList(head);
})
