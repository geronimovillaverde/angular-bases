console.log("Que onda paa");

function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor:T
    ){ 
        return class extends constructor{
            newProperty = "New Property";
            hello = "Override";
        }
    
}

@classDecorator
export class SuperClass{
    public miPropiedad :string = "Abcd";

    print(){
        console.log("Hola mundo desde print");
    }
}

console.log(SuperClass);

const miClase = new SuperClass;
console.log(miClase);