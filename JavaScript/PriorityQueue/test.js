const {PriorityQueue} = require("./index")

test("Insert Item", () => {
    let queue = new PriorityQueue((a, b) => a - b);
    queue.enqueue(2);
    queue.enqueue(101);
    expect(queue.peek()).toBe(101);

    queue.enqueue(1);
    expect(queue.peek()).toBe(101);

    queue.enqueue(100);
    expect(queue.peek()).toBe(101);

    queue.enqueue(200);
    expect(queue.peek()).toBe(200);

    queue.enqueue(201);
    expect(queue.peek()).toBe(201);

    queue.dequeue();
    expect(queue.peek()).toBe(200);

    queue.dequeue();
    expect(queue.peek()).toBe(101);

    queue.dequeue();
    expect(queue.peek()).toBe(100);

    queue.dequeue();
    expect(queue.peek()).toBe(2);

    queue.dequeue();
    expect(queue.peek()).toBe(1);
});

test("Heap Sort - Increasing Order", () => {
    let queue = new PriorityQueue((a, b) => a - b);
    queue.enqueue(2);
    queue.enqueue(101);
    queue.enqueue(1);
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(201);
    queue.heapSort();
    //console.log("Heap Sort");
    //queue.print();
    expect(queue.toArray()).toMatchObject([1, 2, 100, 101, 200, 201]);
});

test("Heap Sort - Decreasing Order", () => {
    let queue = new PriorityQueue((a, b) => b - a);
    queue.enqueue(2);
    queue.enqueue(101);
    queue.enqueue(1);
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(201);
    queue.heapSort();
    //console.log("Heap Sort");
    //queue.print();
    expect(queue.toArray()).toMatchObject([201, 200, 101, 100, 2, 1]);
});


test("Build Max Heapify", () => {
    let queue = new PriorityQueue((a, b) => a - b, [1, 2, 3, 6, 7, 8, 9]);
    //queue.print();
    expect(queue.toArray()).toMatchObject([9, 7, 8, 6, 2, 1, 3]);
});


test("Build Min Heapify", () => {
    let queue = new PriorityQueue((a, b) => b - a, [9, 7, 8, 6, 2, 1, 3]);
    //queue.print();
    expect(queue.toArray()).toMatchObject([1, 2, 3, 6, 7, 8, 9]);
});


test("Heap Sort", () => {
    let queue = new PriorityQueue((a, b) => a - b, [5,1,1,2,0,0]);
    queue.heapSort();
    queue.print();
    //expect(queue.toArray()).toMatchObject([1, 2, 3, 6, 7, 8, 9]);
});




