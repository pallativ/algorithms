var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let newList = new ListNode(0, null);
    let newListCurr = newList;
    let curr = head;
    let index = 1;
    let arr = [];
    while (curr) {
        if (index % 2 === 0) {
            //console.log("Taking element:" + curr.val);
            let backUp = curr.next;
            newListCurr.next = curr;
            newListCurr = newListCurr.next;
            //console.log("After:" + newListCurr.val);
            newListCurr.next = arr.pop();
            newListCurr = newListCurr.next;
            curr = backUp;
        } else {
            //console.log("Skipping element: " + curr.val);
            arr.push(curr);
            curr = curr.next;
        }
        index++;
    }
    if (arr.length) {
        newListCurr.next = arr.pop();
        newListCurr = newListCurr.next;
    }

    newListCurr.next = null;
    return newList.next;
};
module.exports = {swapPairs};