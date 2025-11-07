/**
 *  * QUEUE IS MAINLY FIFO -> FIRST IN FIRST OUT
 * 
 */


class Queue {
    constructor() {
        this.items = [];
    };
    isEmpty() {
        return this.items.length === 0
    };
    length() {
        return this.items.length;
    }
    enqueue(item) {
        this.items.push(item);
    };
    dequeue() {
        if (this.isEmpty()) return undefined;
        return this.items.shift()
    };
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.length()[0]];
    };
    print() {
        console.log(this.items)
    }
}

const queue = new Queue();

console.log(`
    ${queue.isEmpty() ? 'Queue is empty now!' : `Queue length is: ${queue.length()}`}
    `);

// queue.enqueue(2);
// queue.enqueue(5)
// queue.enqueue('string');
// console.log(stack.print());
// queue.dequeue();
// console.log(stack.print());

const enqueueStart = performance.now();
Array.from({ length: 200000 }, (_, idx) => {
    queue.enqueue(idx);
})
const enqueueEnd = performance.now();
console.log(`Enqueued within ${enqueueEnd - enqueueStart} ms. Queue length is: ${queue.length()}`);
const enqueuedWithin = enqueueEnd - enqueueStart
// ? output:
// ** Enqueued within 18.870799999999996 ms. Queue length is: 200000

const length = queue.length();

const dequeueStart1 = performance.now();
for (let i = 0; i <= length; i++) {
    queue.dequeue();
    console.log(`dequeued ${i} from queue, length is ${length}`)
    // ? output:
    // ! Dequeued within 94563.7904 ms. Queue length is: 0 
}
const dequeueEnd1 = performance.now()
console.log(`Dequeued within ${dequeueEnd1 - dequeueStart1} ms. Queue length is: ${queue.length()}`);

const firstLoop = dequeueEnd1 - dequeueStart1;


const dequeueStart2 = performance.now();
let check = true;
while (check) {
    if (queue.dequeue() === undefined) {
        check = false;
        console.log('Queue is empty now, Loop ended!'); // Queue is empty now, Loop ended!
        break;
    }
    queue.dequeue();
}
const dequeueEnd2 = performance.now()

console.log(`Dequeued within ${dequeueEnd2 - dequeueStart2} ms. Queue length is: ${queue.length()}`)
// // ? output
// // *** Dequeued within 0.10300000000279397 ms. Queue length is: 0

const secondLoop = dequeueEnd2 - dequeueStart2

console.log(`
    first loop: ${dequeueEnd1 - dequeueStart1} ms
     second loop: ${dequeueEnd2 - dequeueStart2} ms
    first loop took an extra of: ${(dequeueEnd1 - dequeueStart1) - (dequeueEnd2 - dequeueStart2)} ms
     time taken for enqueue: ${enqueuedWithin} ms
    `)

//**
// ** first loop: 94563.7904 ms
// ** second loop: 0.10300000000279397 ms
// ** first loop took an extra of: 94563.6874 ms
// ** time taken for enqueue: 18.3279 ms
// */