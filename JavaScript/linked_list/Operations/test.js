const {addAtEnd} = require("./index");
const {MyLinkedList} = require("./design_linked_list");

// test("Adding Elements At the End", () => {
//     addAtEnd([1, 2, 3, 4, 5, 6, 7]);
// });

test("Adding at the head", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    expect(linkedList.head.data).toBe(1);
    linkedList.addAtHead(2);
    expect(linkedList.head.data).toBe(2);
});

test("Adding at the Tail", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);
    expect(linkedList.head.data).toBe(1);
    expect(linkedList.get(1)).toBe(2);
});

test("getting node using index", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(-1);
    expect(linkedList.get(10)).toBe(-1);
});

test("Removing the node at index", () => {
    let linkedList = new MyLinkedList();
    // Adding two nodes.
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);

    // deleting the node at 0;
    linkedList.deleteAtIndex(0);
    expect(linkedList.get(0)).toBe(2);

    // Deleting the node at 0;
    linkedList.addAtHead(1);
    linkedList.deleteAtIndex(1);
    expect(linkedList.get(0)).toBe(1);

});

test("Removing the node at index", () => {
    let linkedList = new MyLinkedList();
    // Adding two nodes.
    linkedList.addAtHead(1);
    linkedList.addAtTail(2);

    linkedList.deleteAtIndex(3);
    linkedList.deleteAtIndex(2);
    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(-1);
});


test("Adding At Index", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtIndex(0, 1);
    expect(linkedList.get(0)).toBe(1);
    linkedList.addAtIndex(1, 2);
    expect(linkedList.get(1)).toBe(2);
    linkedList.addAtIndex(2, 3);
    expect(linkedList.get(2)).toBe(3);

    linkedList.addAtIndex(3, 4);
    expect(linkedList.get(3)).toBe(4);
});



test("Adding At Index with Invalid index", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtIndex(0, 1);
    expect(linkedList.get(0)).toBe(1);
    linkedList.addAtIndex(2, 4);
    expect(linkedList.get(3)).toBe(-1);
});