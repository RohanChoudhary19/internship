function maggiekhana(){
    return new Promise ( (resolve,reject)=>{
        console.log("maggie khana start...");
        setTimeout(()=>{
            console.log("maggie khana khatam...");
            resolve();
        },2000);
    });
}
maggielana()
.then(()=> maggiebanana())
.then(() => maggiekhana() )
.then( () => {
    console.log("ab bartan dho lo");
});
