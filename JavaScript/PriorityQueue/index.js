const PriorityQueue = function (comparable) {
    this.list = [];
    this.comparable = comparable;
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
    this.dequeue = function () {
        // Follow the steps to delete the element
        // 1. Delete the element at the begining.
        // 2. Copy the element from end of the list to begining of the list.
        // 3. Heapify the location 0.
        let lastElement = this.list.pop();
        let item = this.list.shift();
        this.list.unshift(lastElement);
        this.Heapify(0);
        return item;
    }

    this.peek = function () {
        let item = this.list[0];
        return item;
    }

    this.buildHeap = function () {
        for (let i = 0; i < this.list.length; i++)
            this.Heapify(i);
    }

    this.Heapify = function (loc) {
        let left = 2 * loc + 1;
        let right = 2 * loc + 2;
        let total = this.list.length - 1;
        if (left > total && right > total)
            return;
        let largest = left;
        if (comparable(this.list[loc], this.list[left]) >= 0)
            largest = loc;
        if (comparable(this.list[right], this.list[largest]) >= 0)
            largest = right;
        if (largest !== loc) {
            let temp = this.list[loc];
            this.list[loc] = this.list[largest];
            this.list[largest] = temp;
            this.Heapify(largest);
        }
    }

    this.print = function () {
        console.log(this.list.join(","));
    }
};

module.exports = {PriorityQueue}