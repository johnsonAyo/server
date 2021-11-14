"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
module.exports = function seed() {
    const defaultProducts = [
        {
            productName: "T Shirt",
            productId: "1",
            productDescription: "Men's Vintage Shirt Casual Short Sleeve T-Shirt",
            productVarieties: [
                {
                    size: "large",
                    color: "orange",
                    quantity: "15",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/1.jpg?6332",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/2.jpg?6332",
                    ],
                    price: "23000",
                },
                {
                    size: "medium",
                    color: "large",
                    quantity: "35",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/3.jpg?3113",
                    ],
                    price: "35000",
                },
            ],
            dateUploaded: "1636633307531",
            dateEdited: "1636633307531",
        },
        {
            productName: "jhonson",
            productDescription: "hat",
            productVarieties: [
                {
                    size: "large",
                    Id: "1",
                    color: "orange",
                    quantity: "15",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/1.jpg?6332",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/2.jpg?6332",
                    ],
                    price: "23000",
                },
                {
                    size: "medium",
                    Id: "2",
                    color: "large",
                    quantity: "35",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/3.jpg?3113",
                    ],
                    price: "35000",
                },
            ],
            productId: 3,
            dateUploaded: "1636888149573",
            dateEdited: "1636888149573",
        },
        {
            productName: "jhonson head",
            productDescription: "head for sacrifice",
            productVarieties: [
                {
                    size: "large",
                    Id: "1",
                    color: "orange",
                    quantity: "15",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/1.jpg?6332",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/453283/2.jpg?6332",
                    ],
                    price: "23000",
                },
                {
                    size: "medium",
                    Id: "2",
                    color: "large",
                    quantity: "35",
                    images: [
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/1.jpg?7852",
                        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/690064/3.jpg?3113",
                    ],
                    price: "35000",
                },
            ],
            productId: 4,
            dateUploaded: "1636888209893",
            dateEdited: "1636888209893",
        },
    ];
    try {
        fs_1.default.readFileSync(__dirname + '/../database.json', { encoding: 'utf8', flag: 'r' });
    }
    catch (error) {
        fs_1.default.writeFileSync(__dirname + '/../database.json', JSON.stringify(defaultProducts));
    }
};
