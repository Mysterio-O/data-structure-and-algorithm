// const indexingStart = performance.now();

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const obj = {};

// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// const indexingEnd = performance.now();

// console.log(obj, `obj took ${indexingEnd - indexingStart} ms to finish`);


// const mappingStart = performance.now();
// const courses = [
//     [course1, "Level1"],
//     [course2, "Level2"],
// ];

// const map = new Map(courses);

// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });

// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name));

// for (let key of map.keys()) {
//     key.name = "Shohoz Shorol Simple " + key.name;
// }

// const mappingEnd = performance.now();
// console.log(map,`mapping took ${mappingEnd - mappingStart} ms`)



// const data = {
//     data:{
//         courseId: "level 1"
//     },
//     "Programming Hero" : {
//         dummy:''
//     }
// }

// console.log(data["Programming Hero"])


// const rawApiData = [
//   {
//     id: "p-001",
//     productName: "Quantum Laptop",
//     category: "Electronics",
//     price: 1200,
//     rating: 4.8,
//     stock: 15,
//   },
//   {
//     id: "p-002",
//     productName: "The Art of Code",
//     category: "Books",
//     price: 45,
//     rating: 4.5,
//     stock: 100,
//   },
//   {
//     id: "p-003",
//     productName: "Cyber Hoodie",
//     category: "Clothing",
//     price: 80,
//     rating: 4.7,
//     stock: 50,
//   },
//   {
//     id: "p-004",
//     productName: "4K Drone",
//     category: "Electronics",
//     price: 650,
//     rating: 4.3,
//     stock: 20,
//   },
//   {
//     id: "p-005",
//     productName: "Basic JavaScript",
//     category: "Books",
//     price: 25,
//     rating: 3.8,
//     stock: 200,
//   },
//   {
//     id: "p-006",
//     productName: "Smart Watch",
//     category: "Electronics",
//     price: 250,
//     rating: 4.7,
//     stock: 70,
//   },
//   {
//     id: "p-007",
//     productName: "Classic T-Shirt",
//     category: "Clothing",
//     price: 30,
//     rating: 4.2,
//     stock: 300,
//   },
//   {
//     id: "p-008",
//     productName: "Design Patterns",
//     category: "Books",
//     price: 55,
//     rating: 4.9,
//     stock: 80,
//   },
//   {
//     id: "p-009",
//     productName: "VR Headset",
//     category: "Electronics",
//     price: 400,
//     rating: 4.6,
//     stock: 30,
//   },
//   {
//     id: "p-010",
//     productName: "USB-C Cable",
//     category: "Electronics",
//     price: 15,
//     rating: 4.0,
//     stock: 500,
//   },
//   {
//     id: "p-011",
//     productName: "Noise-Cancelling Headphones",
//     category: "Electronics",
//     price: 300,
//     rating: 4.7,
//     stock: 40,
//   },
//   {
//     id: "p-012",
//     productName: "Algorithms Explained",
//     category: "Books",
//     price: 50,
//     rating: 4.5,
//     stock: 60,
//   },
// ];

// //? Output => [{ name: "Phone" }, { name: "Smart Watch" }]

// //* Process
// // ? Filter => Electronics
// // ? Sort by => Rating
// // ? Slice => first 3 (top 3)
// // ? Map => transform object shape to { name : "Name"}

// const result = rawApiData
// .filter(data => data.category === 'Electronics')
// .sort((a,b)=>  b.rating - a.rating )
// .slice(0,3)
// .map(item => ({name:item.productName}))

// console.log(result);


// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["Banana", "apple", "Cherry", "date"];

// const sortedNumbers = numbers.sort()
// // console.log(numbers);

// const sortedFruits = fruits.sort((a,b)=> a.localeCompare(b));
// // console.log(fruits);


// const nestedNumbers = [1,2,3,4,[5,6,7,[8,9,[10,[11]]]]];

// const flatNumbers = nestedNumbers.flat(Infinity);
// // console.log(flatNumbers)

// const nestedArray = [
// ['js','css','html'],
// ['css','tailwind'],
// ['react','js']
// ]

// // console.log(nestedArray)
// const newArray = [...new Set(nestedArray.flat().sort((a,b)=> a.localeCompare(b)))];
// console.log(newArray)


// const range = (start, stop, step) => {
//    return Array.from({ length: Math.ceil((stop - start) / step) },
//         (_, i) => start + i * step
//     );
// };

// const numbers = range(1, 10000000, 1000)
// // console.log(numbers.length)
// numbers.sort((a,b)=> b-a);
// console.log(numbers)



// Count subtotal

const cartItems = [
    { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
    { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const total = cartItems.reduce((subtotal, car) => {
    // console.log(subtotal,car);
    return subtotal + (car.price * car.quantity);
}, 0);

// console.log(total);

// Find best scorer

// const players = [
//   { name: "Jamal Bhuyan", score: 88 },
//   { name: "Shekh Morsalin", score: 81 },
//   { name: "Rakib Hossain", score: 95 },
//   { name: "Topu Barman", score: 91 },
//   { name: "Sohel Rana", score: 72 },
// ];

// const best = players.reduce((bestPlayer,player)=> {
//     // console.log(bestPlayer,player);
//     if(bestPlayer.score > player.score){
//         return bestPlayer;
//     }else{
//         return player;
//     }
// },{name:'',score:0});

// console.log(best);



//* Generate a lookup table

// //? Input
// const postsArray = [
//     { id: "p-101", title: "Intro to SQL", author: "Alex" },
//     { id: "p-102", title: "Data Structures in JS", author: "Beth" },
//     { id: "p-103", title: "Understanding Reduce", author: "Chris" },
//     { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
// ];

// //? Output
// // {
// //   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
// //   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
// //   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
// //   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// // }


// const result = postsArray.reduce((final, obj) => {
//     // console.log(final,obj);
//     final[obj.id] = obj;
//     return final
// }, {});
// console.log(result);

// let finalArr = [];
// for (const r in result) {
//     console.log(r);
//     finalArr = [...finalArr, result[r]];
// }
// console.log(finalArr)



//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

// //? input
// const surveyResponses = [
//     "A",
//     "C",
//     "B",
//     "A",
//     "B",
//     "B",
//     "C",
//     "A",
//     "B",
//     "D",
//     "A",
//     "C",
//     "B",
//     "A",
// ];

// //? Output
// // { A: 5, C: 3, B: 5, D: 1 }

// const responseResult = surveyResponses.reduce((table, response) => {
//     // ? this is more readable
//     // if (table[response]) {
//     //     table[response] = table[response] + 1;
//     // } else {
//     //     table[response] = 1;
//     // };


//     // ! this is short hand method. more clean, but less readable
//     table[response] = (table[response] || 0) + 1;

//     return table;
// }, {});

// console.log(responseResult);



//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

const salesOutput = sales.reduce((table, sale) => {
    const { category, price, quantity } = sale;
    console.log(table,sale)
    if (!table[category]) {
        table[category] = {
            totalRevenue: 0,
            itemCount: 0
        }
    }

    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity
    return table
}, {})