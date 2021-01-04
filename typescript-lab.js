"use strict";
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 }, { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    let nameOfTallestMountain = "";
    let tallestHeight = 0;
    // mountains.forEach(mountain => {
    for (const mountain of mountains) {
        if (mountain.height > tallestHeight) {
            tallestHeight = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
const products = [
    { name: 'Conditioner', price: 10.99 },
    { name: 'Moisturizer', price: 25.00 },
    { name: 'Sunscreen', price: 15.00 }
];
function calcAverageProductPrice(products) {
    let totalPrice = 0;
    for (const product of products) {
        for (let i = 0; i < products.length; i++) {
            totalPrice = totalPrice + products[i].price / 3;
        }
    }
    let avgPrice = totalPrice / products.length;
    return avgPrice;
}
let avgProductPrice = calcAverageProductPrice(products);
console.log(avgProductPrice);
const inventory = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(inventory) {
    let inventoryValue = 0;
    let inventorySum = 0;
    inventory.forEach((inventory) => {
        inventoryValue = (inventory.product.price * inventory.quantity);
        inventorySum += inventoryValue;
    }, 0);
    return inventorySum;
}
let totalIventoryValue = calcInventoryValue(inventory);
console.log(totalIventoryValue);
//     for (const inventoryItem of inventory) {
//     for(let i = 0; i < inventory.length; i++) {
//     inventoryValue = (inventoryItem.product.price * inventoryItem.quantity); 
// }
// if(inventoryItem.product.price * inventoryItem.quantity > inventoryValue) {
// inventoryValue = inventoryValue + (inventoryItem.product.price * inventoryItem.quantity);
// }
// }});
//     let totalInventory = inventoryValue
//     return totalInventory
// }
// let totalIventoryValue: number = calcInventoryValue(inventory);
// console.log(totalIventoryValue)
// }
//let totalInventory = inventoryValue
//return totalInventory
