// const { reject } = require("async");


// function getdata(){
//     return new Promise(( resolve,reject) => {
//         resolve("promise resolve ho gya");
//     });
// }

// getdata().then((msg) => {
//     console.log(msg);
// });

// async function handlePromise(){
//     console.log("hello")
//     const val = await getdata();
//     console.log(val);
//     console.log("world");
// }

// handlePromise();

//  
// async function handlePromise() {
//     console.log("hello");
//     const val = await getdata;
//     console.log(val);
//     console.log("world");

//     const val2 = await getData2;
//     console.log(val2);
//     console.log("world 2");
// }
// handlePromise();

// parallel Execution 

 function loadData() {
    return new  Promise.all((resolve,reject) =>{
        console.log(" he hello");
        fetchUsers(),
        setTimeout();
        console.log("be on way");
    });
    }
handlePromise();



