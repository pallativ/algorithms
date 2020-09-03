const { removeDuplicates } = require('./index');
const { MyLinkedList } = require('../Operations/design_linked_list');
test("Remove Duplicates", () =>{
    let list = new  MyLinkedList();
    list.addAtTail(1);
    list.addAtTail(1);
    list.addAtTail(2);
    list.addAtTail(2);
    list.addAtTail(3);
    list.addAtTail(4);
    list.print();
    let head = removeDuplicates(list.getHead());
    list.print();
});