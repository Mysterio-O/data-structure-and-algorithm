//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createUser(i));
    usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

// console.log(usersA)
// console.log(usersB)


// ! not efficient
const commonFriendSlow = (usersA, usersB) => {
    const start = performance.now()
    const commonFriends = [];
    usersA.forEach(userA => {
        usersB.forEach(userB => {
            if (userA.id === userB.id) {
                commonFriends.push(userA)
            }
        })
    });
    const end = performance.now();
    return { count: commonFriends.length, timeTook: end - start }
}

console.log(commonFriendSlow(usersA, usersB));


const commonFriendFast = (usersA, usersB) => {
    const start = performance.now()
    const commonFriends = [];
    const idListA = new Set(usersA.map(user => user.id));
    usersB.forEach(userB => {
        if(idListA.has(userB.id)){
            commonFriends.push(userB);
        }
    });
    const end = performance.now();
    return { count: commonFriends.length, timeTook: end - start }
}

console.log(commonFriendFast(usersA,usersB));