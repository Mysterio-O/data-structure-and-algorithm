
// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false

class Stack {
    constructor() {
        this.items = [];
    };
    isEmpty() {
        return this.items.length === 0
    };
    length() {
        return this.items.length;
    }
    push(item) {
        this.items.push(item);
    };
    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop()
    };
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.length() - 1];
    };
    print() {
        console.log(this.items)
    }
}

const charList = {
    ")": "(",
    "}": "{",
    "]": "["
}

const bracketChecker = (str) => {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // console.log(element);
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            /**
             * stack.isEmpty() -> indicates if the stack is already empty or not
             */
            if (stack.isEmpty()) {
                console.log('char->', char)
                return false
            }

            const expected = charList[char];
            const got = stack.pop();
            console.log("Expected: ", expected, "Got: ", got);
            if (expected !== got) {
                return false
            }

        }
    }
    console.log(stack)
    return stack.isEmpty()
}

console.log(bracketChecker("()[]{}"))