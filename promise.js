const p = new Promise((resolve, reject) => {
    let data = "data received";
    let success = false;

    if (success) {
        resolve(data);
    } else {
        reject();
    }
});

p.then((data) => {
    console.log(data);
}).catch(() => {
    console.log("data not received");
});