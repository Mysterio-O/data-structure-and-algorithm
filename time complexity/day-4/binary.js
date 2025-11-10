const binarySearch = (arr, target) => {
    console.log(`\n===================================`);
    console.log(`🚀 Searching for ${target} in: [${arr}]`);
    console.log(`===================================`);

    let low = 0;
    let high = arr.length - 1;
    let step = 1;

    while (low <= high) {
        console.log(`\n--- Step ${step} ---`);

        // 1. Log the current search window
        const currentWindow = arr.slice(low, high + 1);
        console.log(`  Window (Indices ${low} to ${high}): [${currentWindow}]`);

        // 2. Calculate the middle index (the correct way)
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        // 3. Log the guess
        console.log(`  🎯 Guessing mid index ${mid} (Value: ${guess})`);

        // 4. Log the action based on the guess
        if (guess === target) {
            console.log(`  ✅ Found it! Returning index ${mid}.`);
            return mid;
        } else if (guess > target) {
            console.log(`  ➡️ Action: ${guess} is too high. Discarding right half.`);
            high = mid - 1; // Move 'high' pointer
        } else {
            console.log(`  ➡️ Action: ${guess} is too low. Discarding left half.`);
            low = mid + 1; // Move 'low' pointer
        }
        step++;
    }

    // 5. Log if not found
    console.log(`\n--- End of Search ---`);
    console.log(`  ❌ Target ${target} was not found.`);
    return -1;

}




const array = [];
Array.from({length:100000},(_,idx)=>array.push(idx))



console.log(binarySearch(array, 89641));