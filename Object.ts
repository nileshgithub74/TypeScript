
const person :{firstName : string, lastName : string , Age : number } ={
  firstName : "Nilesh",
  lastName : "Kumar",
  Age : 34,

}

console.log(person.firstName);


function printUser():{name : string,age :number, location: string,}{
  return{
   
    name : "Nilesh",
    age : 21,
    location :"India",
  };
  

}
console.log(printUser());

 