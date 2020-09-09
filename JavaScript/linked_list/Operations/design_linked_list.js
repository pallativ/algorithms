class ListNode {
    constructor(data, next) {
        this.val = data === undefined ? 0 : data;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Initialize your data structure here.
 */
let MyLinkedList = function () {
    this.head = undefined;
};

MyLinkedList.prototype.getHead = function () {
    return this.head;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let curr = this.head;
    if (index < 0)
        return -1;
    while (curr && index > 0) {
        curr = curr.next;
        index--;
    }
    return curr !== null ? curr.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new ListNode(val, this.head);
    this.head = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let curr = this.head;
    const newNode = new ListNode(val, null);
    if (this.head === undefined)
        this.head = newNode;
    else {
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let curr = new ListNode(0, this.head);
    let temp = curr;
    while (curr && index > 0) {
        curr = curr.next;
        index--;
    }
    if (!curr)
        return;

    let newNode = new ListNode(val, curr.next);
    curr.next = newNode;
    this.head = temp.next;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0)
        return;

    let curr = new ListNode(0, this.head);
    let temp = curr;
    while (curr && index > 0) {
        curr = curr.next;
        index--;
    }
    if (curr && curr.next)
        curr.next = curr.next.next;
    this.head = temp.next;
};


MyLinkedList.prototype.removeNthFromEnd = function (n) {
    if (!this.head) return null;
    let curr = this.head;
    let length = 0;
    while (curr) {
        curr = curr.next;
        length++;
    }
    //console.log(length);
    length = length - n;
    curr = new ListNode(0, this.head);
    let temp = curr;
    while (curr && length > 0) {
        //console.log(curr.val);
        curr = curr.next;
        length--;
    }
    //if (curr & curr.next)
    curr.next = curr.next.next;
    this.head = temp.next;
};


/// Print the elements.
MyLinkedList.prototype.print = function () {
    let curr = this.head;
    let arr = [];
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    console.log(arr.join(","));
};

MyLinkedList.prototype.toArray = function (head) {
    let curr = head;
    let arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
};


module.exports = {MyLinkedList, ListNode};