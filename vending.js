function vendingMachine() {
    let insertedValue = 0;

    let inventory = {
        soda: { price: 50, stock: 5 },
        chips: { price: 20, stock: 3 }
    };

    return {
        insertCoin(coin) {
            insertedValue += coin;
            console.log(`Inserted value: ${insertedValue}`);
        },

        buy(item) {
            let itemExist = inventory[item];

            if (!itemExist) {
                console.log("Item not available!");
            } else if (itemExist.stock <= 0) {
                console.log("Item out of stock!");
            } else if (insertedValue < itemExist.price) {
                console.log("Insert more coins!");
            } else {
                insertedValue -= itemExist.price;
                itemExist.stock--;

                console.log(`${item} purchased!`);
                console.log(`Remaining balance: ${insertedValue}`);
            }
        },

        getBalance() {
            console.log(`Current balance: ${insertedValue}`);
        }
    };
}

// Create machine
let machine = vendingMachine();

// Test
machine.insertCoin(20);
machine.buy("chips");
machine.getBalance();