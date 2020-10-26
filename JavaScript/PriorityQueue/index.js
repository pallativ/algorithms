const PriorityQueue = function (comparable, list) {
    this.list = [];
    this.comparable = comparable;
    this.n = 0;
    this.enqueue = function (item) {
        this.list.push(item);
        let i = this.list.length - 1;
        while (i > 0) {
            let parentLoc = Math.floor((i - 1) / 2);
            if (comparable(this.list[parentLoc], this.list[i]) >= 0) {
                break;
            }
            let temp = this.list[i];
            this.list[i] = this.list[parentLoc];
            this.list[parentLoc] = temp;
            i = parentLoc;
        }
    }

    this.heapSort = function () {
        let n = this.list.length;
        for (let i = 1; i <= n; i++) {
            let last = this.list[n - i];
            this.list[n - i] = this.list[0];
            this.list[0] = last;
            this.Heapify(0, n - i);
        }
    }

    this.dequeue = function () {
        // Follow the steps to delete the element
        // 1. Delete the element at the begining.
        // 2. Copy the element from end of the list to begining of the list.
        // 3. Heapify the location 0.
        let lastElement = this.list.pop();
        let item = this.list.shift();
        this.list.unshift(lastElement);
        this.Heapify(0, this.list.length);
        return item;
    }

    this.peek = function () {
        let item = this.list[0];
        return item;
    }

    this.buildHeap = function () {
        let n = this.list.length;
        for (let i = Math.floor(n / 2); i >= 0; i--)
            this.Heapify(i, n);
    }

    this.Heapify = function (loc, n) {
        let left = 2 * loc + 1;
        let right = 2 * loc + 2;

        // if (left > total && right > total)
        //     return;
        let largest = loc;
        if (left < n && this.comparable(this.list[left], this.list[loc]) > 0)
            largest = left;
        if (right < n && this.comparable(this.list[right], this.list[largest]) > 0)
            largest = right;
        if (largest !== loc) {
            let temp = this.list[loc];
            this.list[loc] = this.list[largest];
            this.list[largest] = temp;
            this.Heapify(largest, n);
        }
    }

    this.print = function () {
        console.log(this.list.join(","));
    }

    this.toArray = function () {
        return [...this.list];
    }


    if (list && list.length > 0) {
        this.list.push(...list);
        this.buildHeap();
    }
};

module.exports = {PriorityQueue}