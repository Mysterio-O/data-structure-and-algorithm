
const firstArray = [];
const secondArray = [];

const firstLoopStart = performance.now();

for (let i = 0; i < 1000000; i++) {
    if (i < 500000) {
        firstArray.push(i);
    }

    secondArray.push(i);
}

const firstLoopEnd = performance.now();

// console.log(`First loop took ${firstLoopEnd - firstLoopStart} ms to finish`);


const firstUserListStart = performance.now();
const firstUserList = firstArray.map((index) => ({ userId: index }));
const firstUserListEnd = performance.now();
// console.log(`First user list completed between ${firstUserListEnd - firstUserListStart} ms`)

const secondUserListStart = performance.now();
const secondUserList = secondArray.map((index) => ({ userId: index }));
const secondUserListEnd = performance.now();
// console.log(`Second user list completed between ${secondUserListEnd - secondUserListStart} ms`)


// finding specific user with find();
const findStart = performance.now();

const specificUserOne = secondUserList.find(user => user.userId === 8000000);

const findEnd = performance.now();

// console.log(`Find completed in ${findEnd - findStart} ms`);

// finding specific user with index
const indexStart = performance.now();

const specificUserTwo = secondUserList[8000000];

const indexEnd = performance.now();

// console.log(`Indexing completed in ${indexEnd - indexStart} ms`);


// -------------------------------------------------------------------------------



const array1 = ['apple', 'banana', 'orange', 'guava', 'apple'];

const set = new Set(array1);


set.add('banana');
set.add('strawberry');

console.log(set);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 45, 6, 7, 8, 9, 24, 32, 342, 42, 42, 42, 443324, 14, 3, 532, 4, 24, 53, , 543, 23, 543, 3, 45, 2345, 3, 2, 4, 5, 2, 5, 3, 2, 5, 3, 523, 24, 125, 3, 3, 35, 3, 535, 35, 3, 25, 353, 254, 3, 53, 25, 25, 3, 253, 125, 53, 25, 35, 25, 45, 2535, 25, 35, 25, 35, 25, 25, 45, 25, 35];


// brute force

const bruteForceStart = performance.now();

const removeDuplicate1 = (numbers) => {
    const dummyArray = [];
    numbers.forEach(num => {
        // console.log(num)
        if (!dummyArray.includes(num)) {
            dummyArray.push(num);
        }
    });
    return dummyArray;
}

const bruteForceEnd = performance.now();

console.log(`Brute force ended in ${bruteForceEnd - bruteForceStart} ms`);

console.log(removeDuplicate1(numbers))


// with set

const start = performance.now();

const removeDuplicate2 = (numbers) => {
    const set = new Set(numbers);
    return Array.from(set);
}

const end = performance.now();

console.log(`Adding to set ended in ${end - start} ms`);

console.log(removeDuplicate2(numbers));