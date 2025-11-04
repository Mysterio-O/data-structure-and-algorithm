// * Stateless vs Stateful

/**
 * ? WHAT IS THE DIFFERENCE BETWEEN STATELESS AND STATEFUL
 * 
 * * If any component or function or piece of code can hold the state over iterations, then they are Stateful,
 *  ! others are Stateless
 *  ? in JS functions are stateless and objects are stateful
 */

// * some examples



// ! stateless

const counter = (amount) => {
    let count = 0;
    count += amount;
    return count
}
// console.log(counter(2))
// console.log(counter(3))



// *** Stateful

const counterObject = {
    count : 0,
    add(amount){
       return this.count += amount;
    },
    print(){
       return console.log('total count is',this.count);
    }
};

counterObject.add(2);

console.log(counterObject.print());

counterObject.add(5);

console.log(counterObject.print());