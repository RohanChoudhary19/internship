function greet(name){
    return `hello,${name}!`
}
let message= greet("rohan")
    console.log(message)
  


const arrowfunc = (name)=> {
    return`hello,${name}!`;
};
console.log(arrowfunc("rohan"));

const arrowfun = name => `hello,${name}!`;
console.log(arrowfun("rohan"));

function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log("Sum =", result);
