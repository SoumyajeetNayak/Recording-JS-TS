console.clear();

const arr = ["apple", "mango", "banana", "pear", "guava"];

console.log(arr.at(0)); // apple
console.log(arr.at(1)); // mango
console.log(arr.at(2)); // banana
console.log(arr.at(3)); // pear
console.log(arr.at(4)); // guava

console.log(arr[0]); // apple
console.log(arr[1]); // mango
console.log(arr[2]); // banana
console.log(arr[3]); // pear
console.log(arr[4]); // guava

console.log(arr.at(-1)); // guava
console.log(arr.at(-2)); // pear
console.log(arr.at(-3)); // banana
console.log(arr.at(-4)); // mango
console.log(arr.at(-5)); // apple

console.log(arr[-1]); // undefined
console.log(arr[-2]); // undefined
console.log(arr[-3]); // undefined
console.log(arr[-4]); // undefined
console.log(arr[-5]); // undefined

const arrayLikeObject1 = {
    0: "apple",
    1: "mango",
    2: "banana",
    3: "pear",
    4: "guava",
    length: 5
}

// console.log(arrayLikeObject.at(0)) // error
console.log(Array.prototype.at.call(arrayLikeObject1, 0)); // apple

const arrayLikeObject2 = {
    0: "apple",
    1: "mango",
    2: "banana",
    3: "pear",
    4: "guava",
    length: 2
}
console.log(Array.prototype.at.call(arrayLikeObject2, 4)); // undefined