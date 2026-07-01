// const student ={
//     name:"rohan",
//     attendance:0,

//     isPresent: function(){
//         this.attendance++;
//         console.log(
//             `${this.name} is presnt.Total Attendace = ${this.attendance} `
//         );
//     },
// };

// student.isPresent();

// class student{
//     constructor(name, attendance){
//         this.name=  name;
//         this.attendance = attendance;
//     }
//     isPresent(){
//         this.attendance++;
//         console.log(
//             `${this.name} is present.Total Attendance = ${this.attendance}`
//         );
//     }
// }
// const student1 = new student("rohan",0);
// const student2 = new student("piyush",0);

// student1.isPresent();
// student2.isPresent();

// student2.isPresent();
// student1.isPresent();



class ShoppingCart {
    constructor() {
        // initialize empty items array
        this.items = [];
    }

    // add item method
    addItem(item) {
        this.items.push(item);
        console.log(`${item} added to cart`);
    }
}

// create object
const cart = new ShoppingCart();

// add items
cart.addItem("Apple");
cart.addItem("Shoes");
cart.addItem("Laptop");

// show final cart
console.log("Final Cart Items:", cart.items);
        