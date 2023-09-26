


export class Person{
    
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string ='No address',
    ){}
    }


export class Hero{
    constructor(
        public alterEgo : string,
        public age: number,
        public realName: string,
        public person : Person,
        ){
        
    }

}


const gero = new Person('Tony','Stark', 'Nueva York');
const ironman = new Hero('IronMan', 45, 'Tony', gero);
console.log(ironman);