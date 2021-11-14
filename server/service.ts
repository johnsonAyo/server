import fs from 'fs';
import { Product } from './inteface';



function getProducts() {
    const products = fs.readFileSync(__dirname+'/../database.json', {encoding:'utf8', flag:'r'});
    return JSON.parse(products);
}

function getProduct(productId: string) {
    const data = fs.readFileSync(__dirname+'/../database.json', {encoding:'utf8', flag:'r'});
    const products = JSON.parse(data);
    return products.find((product:Product) => product.productId ==  productId);
}

function addProduct(newProduct: Product): Product {
    const data = fs.readFileSync(__dirname+'/../database.json', {encoding:'utf8', flag:'r'});
    const products = JSON.parse(data);
    newProduct.productId = products[products.length - 1].productId +1;
    newProduct.dateUploaded = Date.now().toString();
    newProduct.dateEdited = Date.now().toString();
    products.push(newProduct);
    fs.writeFileSync(__dirname+'/../database.json', JSON.stringify(products));
    return newProduct;
}

function updateProduct(newProduct: Product): Product {
    const data = fs.readFileSync(__dirname+'/../database.json', {encoding:'utf8', flag:'r'});
    const products = JSON.parse(data);
    let updateProduct: Product = products.find((product:Product) => product.productId ==  newProduct.productId);
    products.map((product:Product) => {
        if(product.productId == newProduct.productId) {
            if(newProduct.productName) product.productName = newProduct.productName;
            if(newProduct.productDescription) product.productDescription = newProduct.productDescription;
            if(newProduct.productVarieties) product.productVarieties = newProduct.productVarieties;
            product.dateEdited = Date.now().toString();
            updateProduct = product;
        }
        return product;
    });
    fs.writeFileSync(__dirname+'/../database.json', JSON.stringify(products));
    return updateProduct;
}

function deleteProduct(productId: string) {
    const data = fs.readFileSync(__dirname+'/../database.json', {encoding:'utf8', flag:'r'});
    const products = JSON.parse(data);
    var newProducts = products.filter((product:Product) => product.productId !=  productId);
    fs.writeFileSync(__dirname+'/../database.json', JSON.stringify(newProducts));
    return newProducts;
}


// const newProduct: Product = {
//     "productName": "nosemask",
//     "productId" : "1",
//     "productDescription": "masking",
//     "productVarieties": [
//       {
//         "size": "large",
//         "Id" : "1",
//         "color": "orange",
//         "quantity": "15",
//         "images": ["https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/1.jpg?6332", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/2.jpg?6332"],
//         "price": "23000"
//       },
//       {
//         "size": "medium",
//         "Id": "2",
//         "color": "large",
//         "quantity": "35",
//         "images": ["https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852", "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/3.jpg?3113"],
//         "price": "35000"
//       }
//     ],
//     "dateUploaded": "1636633307531",
//     "dateEdited": "1636633307531"
// }
// const run = ()=> console.log(deleteProduct("1"));
// console.log("ran");

export = { getProducts, addProduct, updateProduct, deleteProduct, getProduct };