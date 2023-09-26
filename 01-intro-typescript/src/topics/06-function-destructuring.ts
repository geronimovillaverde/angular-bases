console.log("HOLAA");

export interface Product{
    description: string;
    price: number;
}
const phone:Product ={
    description : "Nokia",
    price : 100
}
const tablet : Product ={
    
    description : "Air iPad",
    price : 3500
}

interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

// function taxCalculation(options: TaxCalculationOptions):[number, number]{ RETORNA UN ARRAY de numero y numero
    // function taxCalculation({tax, products}:TaxCalculationOptions):[number, number]{ NO ES LA MEJOR SI HAY MAS OPCIONES
export function taxCalculation(options:TaxCalculationOptions):[number, number]{
        const {tax, products} = options;
    let total = 0;
    products.forEach( ({ price}) => {
        total += price;
    });
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products : shoppingCart,
    tax: tax, //es igual q escribir solo tax(propiedad tiene nombre igual a la variable)

});
console.log("Total", total);
console.log("Tax", taxTotal);//XQ ES UN ARRAY

