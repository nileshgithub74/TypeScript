//  A type alias is a way to create a new Name for an exitsing type. it allows you to define a custom type that refers to another type and  give it a more meangingful or descriptive name.


// type aliases are defined using  the type keyword followed by the name of the alias and equal sign and the type it refers to .


// type MyString  = string;
// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// const personDetails : Person = {
//   name: "John Doe",  
//   age: 30,          
//   location: "New York"  
// };

// // console.log(personDetails);


// const printUserInfo = (user: Person)=> {
//   return `Name : ${user.name}`;
// }

// console.log(printUserInfo(personDetails));



// Optional Properties   : here we add question marks to make it optional 


type Persons ={
  name : string,
  age : number;

   readonly email? : string,
}

const persons : Persons ={
  name :"nilesh",
age : 21


}

console.log(persons.name);


// const userInfo=(user : Persons)=>{
//   return `Name : ${user.name }`
// }

// const result = userInfo(persons);
// console.log(result);