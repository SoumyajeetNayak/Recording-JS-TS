console.clear();
function reverse(str:string): string {
    let length = str.length;
    if(length === 1) {
        return str;
    }
    let lastElement = str.slice(-1);
    let restOfTheElement = str.slice(0, length - 1);
    return lastElement + reverse(restOfTheElement);
}

console.log(reverse('hello'));