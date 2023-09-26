import { Passenger } from './11-optional-chaining';
console.log("Hola frannn");


export interface Passenger{
    name:string;
    children ?:string[];
}

const pasajero1: Passenger={
    name:'Geronimo',
}

const pasajero2: Passenger={
    name:'Lucas',
    children:['Natalia', 'Julieta'],
}

const returnChildrenNumber= (pasajero: Passenger):number => {
     const howManyChildren = pasajero.children?.length || 0;
    //const howManyChildren = pasajero.children!.length;
    console.log(pasajero.name, howManyChildren);

}
returnChildrenNumber(pasajero1);