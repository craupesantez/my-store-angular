const username: string = 'craupesantez';

const sum = (a:number, b: number)=>{
  return a+ b;
}

sum(2,3);

class Persona{


  constructor(public age: number, public lastName: string){}
}

const cesar = new Persona(15, 'Pesantez');

cesar.age;

