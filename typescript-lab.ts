// Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

const mountains : Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029}, {name: 'Denali', height: 20310}];

function findNameOfTallestMountain(mountains : Mountain[]) : string {
    let nameOfTallestMountain : string = "";
    let tallestHeight : number = 0;
// mountains.forEach(mountain => {
    for (const mountain of mountains) {
    if (mountain.height > tallestHeight) {
        tallestHeight = mountain.height;
        nameOfTallestMountain = mountain.name;
    }
}
    return nameOfTallestMountain;
}

let tallestMountain : string = findNameOfTallestMountain(mountains);
console.log(tallestMountain)

// Products
interface Product {
    name: string; 
    price: number;
}

const products : Product[] = [
    {name: 'Conditioner', price: 10.99},
    {name: 'Moisturizer', price: 25.00},
    {name: 'Sunscreen', price: 15.00}
];

function calcAverageProductPrice(products : Product[]) : number {
    let totalPrice : number = 0;
    for (const product of products) {
    for(let i = 0; i < products.length; i++) {
        totalPrice = totalPrice + products[i].price/3
    
    }
}
        let avgPrice = totalPrice/products.length;
        return avgPrice
}

        let avgProductPrice: number = calcAverageProductPrice(products);
console.log(avgProductPrice)

// Iventory
interface InventoryItem {
    product: Product; 
    quantity: number;
}

const inventory : InventoryItem[] = [
    {product: {name: 'motor', price: 10.00}, quantity: 10},
    {product: {name: 'sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20},
]  
function calcInventoryValue(inventory : InventoryItem[]) : number {
    let inventoryValue : number = 0;
    let inventorySum : number = 0;
    inventory.forEach((inventory) => {

    inventoryValue = (inventory.product.price * inventory.quantity);
    inventorySum += inventoryValue;
    }, 0);

    return inventorySum;
}
let totalIventoryValue: number = calcInventoryValue(inventory);
console.log(totalIventoryValue)

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



