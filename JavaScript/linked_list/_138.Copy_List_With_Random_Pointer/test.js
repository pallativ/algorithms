const {recursive, iterative, Node} = require("./index");
const {MyLinkedList} = require("../Operations/design_linked_list");

test("Copy List with Random Pointer", () => {
    let root = new Node(7, null, null);
    root.next = new Node(13, null, null);
    root.next.next = new Node(11, null, null);
    root.next.next.next = new Node(10, null, null);
    root.next.next.next.next = new Node(1, null, null);

    root.random = null;
    root.next.random = root;
    root.next.next.random = root.next.next.next.next;
    root.next.next.next.random = root.next.next;
    root.next.next.next.next.random = root;


    let copied = iterative(root);
    let list = new MyLinkedList();
    console.log(list.toArray(copied));
});