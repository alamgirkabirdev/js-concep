const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 5400, brand: 'iphone', color: 'golden'},
    {name: 'watch', price:7000 , brand: 'casio', color: 'yellow'},
    {name: 'sungalss', price:900 , brand: 'r bon', color: 'black'},
    {name: 'camera', price: 9000 , brand: 'canon', color: 'gray'},
];

const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product =>{

})

//3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// find
const special = products.find(product => product.name.includes('n'));
console.log(special);