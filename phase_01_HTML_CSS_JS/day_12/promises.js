let resp=fetch("https://dummyjson.com/products")
.then((response) => {
    return response.json();
})
.then((json_products) => {
    console.log(json_products);
    return fetch("https://dummyjson.com/products/categories")
})
,then((response) => {
    return response.json();
})
.then((json_recipes) => {
    console.log(json_recipes);
})
.catch((error) => {
    console.log(error);
});
//if we use multiple then statements, we can handle the response and errors separately. The first then statement processes the response and converts it to JSON, while the second then statement handles the data. The catch statement is used to handle any errors that may occur during the fetch operation.
let ownPromise = new Promise((resolve, reject) => {
    let status = true;
    if (status) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

ownPromise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

console.log("End of the code");