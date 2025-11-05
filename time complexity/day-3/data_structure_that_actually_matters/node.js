class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const head = new Node(10);
// console.log(head);

// head.next = new Node(20);

// head.next.next = new Node(30)

// console.log(head)

// let temp = head;

// while(temp !== null){
//     console.log(`temp is: ${temp?.value}`)
//     temp = temp.next;
// }

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {

        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }
    prepend() {

    }
    remove() {

    }
    print() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log(arr.join(' ->'),'-> null');
        console.log(this.head)
        console.log(this.tail)
        console.log(this.length)
    }
}

const add = new LinkedList();


add.append(2)
add.append(3)
add.append(50)
add.append(500)
add.append(5000)

add.print();