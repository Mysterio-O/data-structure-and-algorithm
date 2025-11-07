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
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            // if the linked list is not empty
            newNode.next = this.head; // set the next element of current prepend node as current head
            this.head = newNode; // set the new node as the head of the linked list
        }
        this.length++;
        return this;
    }
    insert(index, value) {
        // if index value is invalid, return ->>
        if (index < 0 || index > this.length) {
            console.error('index is not valid');
            return undefined;
        }
        // append value if the index is equal to the length
        if (index === this.length) {
            return this.append(value);
        }
        // prepend value if the index is 0++
        if (index === 0) {
            return this.prepend(value);
        }

        // if the value needed to insert in the middle

        // find the leading node
        const leadingNode = this._traverseIndex(index - 1);
        const holdingNode = leadingNode.next;

        // create the new node
        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;
    }
    remove(index) {

        console.log(index)
        // if(index < 0 || index >= this.length){
        //     console.error("invalid index");
        //     return undefined;
        // }

        // if its the first node which needed to be removed
        if (index === 0) {
            const itemToBeRemoved = this.head.value
            // remove the current and set the next as head (which is actually null already)
            this.head = this.head.next;
            // check for current head (if its null or not)
            if (this.head === null) {
                // add the link with the tail as tail
                this.tail = null;
                console.log('tail converted to null')
            }
            this.length--;
            console.log('this length->', this.length)
            console.log('item removed -> ', itemToBeRemoved)
            return itemToBeRemoved;
        }

        // find the leading node first
        const leadingNode = this._traverseIndex(index - 1);
        console.log("leading node->",leadingNode);
        // find the node to be removed
        const nodeToBeRemoved = leadingNode.next;
        console.log('node to remove->',nodeToBeRemoved);


        leadingNode.next = nodeToBeRemoved.next;

        // if its the last item, then set the leadingNode as tail
        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }
        this.length--;

        return nodeToBeRemoved;

    }
    print() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log(arr.join(' ->'), '-> null');
        console.log('head ->', this.head)
        console.log('tails ->', this.tail)
        console.log(this.length)
    }

    // private helper function
    _traverseIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

}

const add = new LinkedList();


// add.append(2)
// add.append(3)
// add.append(50)
// add.append(500)
// add.append(5000)

// add.prepend(999);
// add.prepend(8888)

// add.append(1).append(2).append(3).prepend(4).prepend(5).prepend(6)


// add.insert(2, 100000);
// add.remove(2)
// add.remove(6)
// add.remove(5)
// add.remove(4)
// add.remove(3)
// add.remove(2)
// add.remove(1)
// add.remove(0);
add.append(1).append(2).append(3).append(4);
add.remove(3)
add.remove(2)
add.remove(1)
add.remove(0)

add.print(); 
