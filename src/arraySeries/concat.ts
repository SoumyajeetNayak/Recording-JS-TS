console.clear();

const arrayLikeObject = {
    0: "apple",
    1: "mango",
    2: "guava",
    length: 2,
    [Symbol.isConcatSpreadable]: true
}

const result = Array.prototype.concat.call(arrayLikeObject, ["peach", "banana"]);
console.log(result);