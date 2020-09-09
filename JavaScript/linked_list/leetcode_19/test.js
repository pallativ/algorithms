const { MyLinkedList } = require("../Operations/design_linked_list");

test("Adding at the head", () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtTail(1);
    linkedList.addAtTail(2);
    linkedList.addAtTail(3);
    linkedList.addAtTail(4);
    linkedList.addAtTail(5);

    linkedList.print();
    linkedList.removeNthFromEnd(2);
    linkedList.print();

});