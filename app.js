const HTTPClient = require("./axiosAsync.js");
const fs = require("fs");
const url = "http://jservice.io/api/category?id=";
const categoriesArray = [21, 67, 680, 309, 582, 267];
const categoryPromises = categoriesArray.map(id => HTTPClient(url + id))

// function map (array, callback) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]));
//     }

//     return newArray;
// }

// const categoryPromises = map(categoriesArray, id => HTTPClient(url + id))

Promise.all(categoryPromises)
    .then(categories => fs.writeFileSync("./categories.json", JSON.stringify(categories)));
    // test by running "node app.js"