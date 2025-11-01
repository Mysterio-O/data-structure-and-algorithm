
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

console.log(`First loop took ${firstLoopEnd - firstLoopStart} ms to finish`);


const firstUserListStart = performance.now();
const firstUserList = firstArray.map((index) => ({ userId: index }));
const firstUserListEnd = performance.now();
console.log(`First user list completed between ${firstUserListEnd - firstUserListStart} ms`)

const secondUserListStart = performance.now();
const secondUserList = secondArray.map((index) => ({ userId: index }));
const secondUserListEnd = performance.now();
console.log(`Second user list completed between ${secondUserListEnd - secondUserListStart} ms`)


// finding specific user with find();
const findStart = performance.now();

const specificUserOne = secondUserList.find(user => user.userId === 8000000);

const findEnd = performance.now();

console.log(`Find completed in ${findEnd - findStart} ms`);

// finding specific user with index
const indexStart = performance.now();

const specificUserTwo = secondUserList[8000000];

const indexEnd = performance.now();

console.log(`Indexing completed in ${indexEnd - indexStart} ms`);