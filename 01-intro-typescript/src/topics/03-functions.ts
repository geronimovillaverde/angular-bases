// function multiply(firstNumbre:number, secondNumber?:number, base:number=2){
//     return firstNumbre * base;
// }
// const result=multiply(7);
// console.log(result);

interface Character{
    name: string;
    hp: number;
    showHP : ()=>void; //void significa q no retorna nada
}

const  healCharacter = (character:Character, amount:number) =>{
    character.hp += amount;
}

const strider : Character = {
    name:"Aragorn",
    hp: 50,
    showHP(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 10);//suma 10 a los 50 hp que ya tenia
healCharacter(strider, 30);
strider.showHP();



export{}