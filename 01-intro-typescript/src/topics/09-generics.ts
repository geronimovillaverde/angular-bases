

console.log("Hla djokovic");


export function whatsMyType<T>( argumento:T ):T{
    return argumento;
}

let amIString= whatsMyType<string>("Hola mundo");
let amINumber= whatsMyType<number>(50);
let amIArray= whatsMyType<number[]>([1,2,3,4,5]);
 

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
