let balance = 10000000000000000000000000;

function withdraw(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= balance) {
      balance -= amount;
      resolve(`Withdrawn ₹${amount}. Balance: ₹${balance}`);
    } else {
      reject("Insufficient Balance");
    }
  });
}

withdraw(9999999999999999999999999)
  .then(result => console.log(result))
  .catch(error => console.log(error));