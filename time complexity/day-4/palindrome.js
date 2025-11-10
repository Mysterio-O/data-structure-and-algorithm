const isPalindrome = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('')
    if (normalized === reversed) return true
    else return false
};
// console.log(isPalindrome('doggoD'));
// console.log(isPalindrome('doggoDss'));


const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0
    let right = normalized.length - 1;

    while (left < right) {
        console.log(`left: ${normalized[left]}  |  right: ${normalized[right]}`);
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

}

console.log(isPalindromeTwoPointer('Evil is a name of a foeman, as I live.'))