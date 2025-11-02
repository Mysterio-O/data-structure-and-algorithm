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

const total = cartItems.reduce((subtotal,car)=> {
    // console.log(subtotal,car);
    return subtotal + (car.price * car.quantity);
},0);

// console.log(total);

// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const best = players.reduce((bestPlayer,player)=> {
    // console.log(bestPlayer,player);
    if(bestPlayer.score > player.score){
        return bestPlayer;
    }else{
        return player;
    }
},{name:'',score:0});

console.log(best);