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