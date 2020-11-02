const insertionSortList = function (head) {
    let ar = [];
    let curr = head;
    while (curr) {
        ar.push(curr);
        curr = curr.next;
    }

    const swap = function (start, curr) {
        let key = ar[curr];
        let i = curr
        for (; i > start; i--) {
            ar[i] = ar[i - 1];
        }
        ar[i] = key;
    }

    const binarySearch = function (start, end, curr) {
        while (start < end) {
            let mid = start + Math.floor((end - start) / 2);
            if (ar[mid].val > ar[curr].val)
                end = mid;
            else
                start = mid + 1;
        }
        return start;
    }

    for (let i = 1; i < ar.length; i++) {
        let index = binarySearch(0, i, i);
        swap(index, i);
    }

    for (let i = 1; i < ar.length; i++) {
        ar[i - 1].next = ar[i];
    }
    ar[ar.length - 1].next = null;

    console.log(ar);
};

module.exports = {insertionSortList}