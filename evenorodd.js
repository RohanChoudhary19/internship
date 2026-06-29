function checkEvenOdd(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} is Even`);
        } else {
            reject(`${num} is Odd`);
        }
    });
}

let number = 77;

checkEvenOdd(number)
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });