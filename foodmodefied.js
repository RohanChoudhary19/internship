// function placeorder(){
//   return new Promise((resolve)=> {
//     console.log("order placed");
//     resolve();
//   });
// }
// function foodperpared(){
//     return new Promise((resolve)=>{
//         console.log("food prepared");
//         resolve();
//     });
// }    

// function fooddeliverd(){
//     return new Promise((resolve)=>{
//         console.log("fooddeliverd");
//         resolve();
//     });
// }

// placeorder()
// .then(()=> foodperpared())
// .then(()=> fooddeliverd()).then(()=> console.log("hui huihui"));


const https = require("https");
const fs = require("fs");
const sharp = require("sharp");

const imageUrl = "https://example.com/image.jpg";

// Download image
https.get(imageUrl, (response) => {
  const file = fs.createWriteStream("image.jpg");

  response.pipe(file);

  file.on("finish", async () => {
    file.close();

    // Convert JPG to WEBP
    await sharp("image.jpg")
      .webp({ quality: 80 })
      .toFile("image.webp");

    console.log("Downloaded and converted to WEBP!");
  });
});