/**
 * * there are two ways to implement stack
 *  ? 1. Array
 *  ? 2. Linked Lists 
 *  * MAINLY STACK IS LIFO -> LAST IN FIRST OUT
 */


class Stack {
    constructor() {
        this.items = [];
    };
    isEmpty() {
        return this.items.length === 0
    };
    length() {
        return this.items.length;
    }
    push(item) {
        this.items.push(item);
    };
    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop()
    };
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.length() - 1];
    };
    print() {
        console.log(this.items)
    }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(2);
stack.push(5)
stack.push('string');
console.log(stack.print());
stack.pop();;
console.log(stack.print());