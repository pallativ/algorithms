const { MyLinkedList } = require("../Operations/design_linked_list");
const { reverse, reverse_v1 } = require("./index");

test("Leetcode : 206 - Reverse Linked List", () => {
    let list = new MyLinkedList();
    list.addAtTail(1);
    list.addAtTail(2);
    list.addAtTail(3);
    list.addAtTail(4);
    list.addAtTail(5);
    let head = list.getHead();
    let result = list.toArray(reverse(head));
    expect(result).toMatchObject([5,4,3,2,1]);
});

test("Leetcode : 206 - Reverse Linked List", () => {
    let list = new MyLinkedList();
    list.addAtTail(1);
    list.addAtTail(2);
    list.addAtTail(3);
    list.addAtTail(4);
    list.addAtTail(5);
    let head = list.getHead();
    let result = list.toArray(reverse_v1(head));
    expect(result).toMatchObject([5,4,3,2,1]);
});


