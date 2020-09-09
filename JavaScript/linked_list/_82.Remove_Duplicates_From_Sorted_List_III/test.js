const {deleteDuplicates} = require("./index");
const {MyLinkedList} = require("../Operations/design_linked_list");

test("[1,1,1,2,3] -> [2,3]", () => {
    let list = new MyLinkedList();
    [1, 1, 1, 2, 3].forEach(t => list.addAtTail(t));
    let head = list.head;
    let result = deleteDuplicates(head);
    let arr = list.toArray(result);
    expect(arr).toMatchObject([2,3]);
});

test("[1,1] -> []", () => {
    let list = new MyLinkedList();
    [1, 1].forEach(t => list.addAtTail(t));
    let head = list.head;
    let result = deleteDuplicates(head);
    let arr = list.toArray(result);
    expect(arr).toMatchObject([]);
});