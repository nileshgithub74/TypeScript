class Person {
  firstname: string;
   lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
    
   greet (): string {
     return `welcome ${this.firstname} ${this.lastname}`;
   }
}


class student extends Person{

     id : number;

     constructor( firstname : string , lastname : string, id : number){
        super(firstname, lastname);
        this.id = id;
     }

     greet(): string {
         return `welcome ${this.firstname} ${this.lastname}, this  is Your registration id : ${this.id}`;
     }
}

const s = new student("Komal", "kr", 234324);
console.log(s.greet());