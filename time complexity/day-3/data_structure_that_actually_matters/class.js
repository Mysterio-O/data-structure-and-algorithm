class Counter {
    constructor(count) {
        this.count = count;
    }
    add(amount) {
        this.count += amount;
    }
    print() {
        console.log(`Total Count is: ${this.count}`);
    }
}

const counter1 = new Counter(0);
const counter2 = new Counter(0);
const counter3 = new Counter(0);


const newArray = Array.from({ length: 10 }, (_, idx) => {
    // console.log(idx)
    counter1.add(idx);
    console.log(`counter 1 on ${idx} iteration:-> ${counter1.count}`);
    counter2.add(counter1.count + idx);
    console.log(`counter 2 on ${idx} iteration:--> ${counter2.count}`);
    counter3.add(counter1.count + counter2.count + idx);
    console.log(`counter 3 on ${idx} iteration:---> ${counter3.count}`);
})

// console.log(counter1)
// console.log(counter2)
// console.log(counter3)