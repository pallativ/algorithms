const {createLinkedListInReverseOrder, getItemsInReverse, addTwoNumbers, addTwoNumbers_v2} = require('./index');

// test("Add Numbers Using Linked List", () => {
//     let l1 = createLinkedListInReverseOrder([2, 4, 3]);
//     let l2 = createLinkedListInReverseOrder([5, 6, 4]);
//
//     let number1 = 0;
//     let number2 = 0;
//     number1 = parseInt(getItemsInReverse(l1, []).join(''));
//     number2 = parseInt(getItemsInReverse(l2, []).join(''));
//     let arr = (number1 + number2).toString().split('');
//     let result = createLinkedListInReverseOrder(arr);
//     expect(getItemsInReverse(result, [])).toStrictEqual(['8', '0', '7'])
// });
//
// test("Add Numbers Using Linked List", () => {
//     let l1 = createLinkedListInReverseOrder([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
//     let l2 = createLinkedListInReverseOrder([5, 6, 4]);
//
//     let number1 = 0;
//     let number2 = 0;
//     number1 = BigInt(getItemsInReverse(l1, []).join(''));
//     number2 = BigInt(getItemsInReverse(l2, []).join(''));
//     let arr = (number1 + number2).toString().split('');
//     let result = createLinkedListInReverseOrder(arr);
//     console.log(getItemsInReverse(result,[]).join(" "))
// });