const { getNode } = require('./index');
const { MyLinkedList } = require('../Operations/design_linked_list');


test("get node value from trail", () =>{
    let list = new  MyLinkedList();
    list.addAtTail(1);
    let head = list.getHead();
    expect(getNode(head, 0)).toBe(1);
    list.addAtTail(2);
    expect(getNode(head, 0)).toBe(2);
    expect(getNode(head, 1)).toBe(1);
});