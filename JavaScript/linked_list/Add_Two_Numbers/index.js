function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

let addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p != null || q != null) {
        let x = p !== null ? p.val : 0;
        let y = q != null ? q.val : 0;
        let sum = carry + x + y;
        let remainder = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(remainder);
        curr = curr.next;
        p = p != null ? p.next : null;
        q = q != null ? q.next : null;
    }
    if (carry > 0)
        curr.next = new ListNode(carry);
    return dummyHead.next;
};


// function getItemsInReverse(l1, arr) {
//     if (l1.next != null)
//         getItemsInReverse(l1.next, arr);
//     arr.push(l1.val);
//     return arr;
// }
//
// function buildLinkedList(arr, ll) {
//     if (arr.length !== 0) {
//         let value = arr.shift();
//         let node = new ListNode(value);
//         buildLinkedList(arr, node);
//         ll.next = node;
//     }
// }
//
// let addTwoNumbers_v2 = function (l1, l2) {
//     let arr = [];
//     let value1 = parseInt(getItemsInReverse(l1, arr).join(''));
//     arr = [];
//     let value2 = parseInt(getItemsInReverse(l2, arr).join(''));
//     let result = value1 + value2;
//     arr = result.toString().split('').reverse();
//     console.log(arr.join(" "));
// };

let createLinkedListInReverseOrder = function (arr) {
    let curr = null;
    for (let digit of arr) {
        let node = new ListNode(digit);
        node.next = curr;
        curr = node;
    }
    return curr;
};


module.exports = {ListNode, getItemsInReverse, createLinkedListInReverseOrder, addTwoNumbers, addTwoNumbers_v2};