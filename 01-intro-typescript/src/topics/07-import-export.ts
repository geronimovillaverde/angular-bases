
import{  Product, taxCalculation } from './06-function-destructuring';




const shoppingCart: Product[] = [
    {
        description: "Motorola",
        price: 200
    },
    {
        description: "iPhone",
        price: 850
    }
];

//tax = 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});
console.log('Total', total);
console.log('Tax', tax);