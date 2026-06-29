function orderPlaced(cb) {
    console.log("Order placed");

    setTimeout(() => {
        cb();
    }, 2000);
}

function foodPrepared(cb) {
    console.log("Food prepared");

    setTimeout(() => {
        cb();
    }, 2000);
}

function delivered() {
    console.log("Packing and delivering food");

    setTimeout(() => {
        console.log("Food delivered");
    }, 2000);
}

// Callback chaining
orderPlaced(() => {
    foodPrepared(() => {
        delivered();
    });
});