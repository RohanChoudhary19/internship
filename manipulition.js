let arr1 = ["apple", 2];
let arr2 = [...arr1, 2, 4];
console.log(arr2);

let car = { make: "toyota", model: "corolla" };

console.log(Object.keys(car)); // ["make", "model"]
console.log(Object.values(car)); // ["toyota", "corolla"]
console.log(Object.entries(car)); // [["make", "toyota"], ["model", "corolla"]]

