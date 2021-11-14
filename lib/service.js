"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
function getProducts() {
    const products = fs_1.default.readFileSync(__dirname + '/../database.json', { encoding: 'utf8', flag: 'r' });
    return JSON.parse(products);
}
function getProduct(productId) {
    const products = getProducts();
    return products.find((product) => product.productId == productId);
}
function addProduct(newProduct) {
    const data = fs_1.default.readFileSync(__dirname + '/../database.json', { encoding: 'utf8', flag: 'r' });
    const products = JSON.parse(data);
    newProduct.productId = products[products.length - 1].productId + 1;
    newProduct.dateUploaded = Date.now().toString();
    newProduct.dateEdited = Date.now().toString();
    products.push(newProduct);
    fs_1.default.writeFileSync(__dirname + '/../database.json', JSON.stringify(products));
    return newProduct;
}
function updateProduct(newProduct) {
    const data = fs_1.default.readFileSync(__dirname + '/../database.json', { encoding: 'utf8', flag: 'r' });
    const products = JSON.parse(data);
    let updateProduct = products.find((product) => product.productId == newProduct.productId);
    products.map((product) => {
        if (product.productId == newProduct.productId) {
            if (newProduct.productName)
                product.productName = newProduct.productName;
            if (newProduct.productDescription)
                product.productDescription = newProduct.productDescription;
            if (newProduct.productVarieties)
                product.productVarieties = newProduct.productVarieties;
            product.dateEdited = Date.now().toString();
            updateProduct = product;
        }
        return product;
    });
    fs_1.default.writeFileSync(__dirname + '/../database.json', JSON.stringify(products));
    return updateProduct;
}
function deleteProduct(productId) {
    const data = fs_1.default.readFileSync(__dirname + '/../database.json', { encoding: 'utf8', flag: 'r' });
    const products = JSON.parse(data);
    const deleteProduct = products.find((product) => product.productId == productId);
    if (!deleteProduct) {
        return deleteProduct;
    }
    var newProducts = products.filter((product) => product.productId != productId);
    fs_1.default.writeFileSync(__dirname + '/../database.json', JSON.stringify(newProducts));
    return deleteProduct;
}
module.exports = { getProducts, addProduct, updateProduct, deleteProduct, getProduct };
