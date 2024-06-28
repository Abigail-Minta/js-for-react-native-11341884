// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage
// const numbers = [1, 2, 3, 4];
// console.log(processArray(numbers)); // [3, 4, 9, 16]
