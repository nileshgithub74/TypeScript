

// function add(a : number, b : number){
//   return     a+b;
// }

// console.log(add(5,4));






// function add(a : string, b : number){
//   return     a+b;
// }
// let result = add("Nilesh", 7);
// console.log(result);



// Arrow function

// const add = (a : string , b : number)=>{
//   return  a + b;
// }


// console.log(add("sreyansh" , 7));

// const double = (num : number) =>{
//   return  num *2;
// }

// const result = double(3);
// console.log(result);




// const multi = (x: number , y: number ) =>{
//   return   x*y;
// }

// console.log(multi(5,4));






// Note :  Typescript will give you warning if you provide more or less arguments then you specify in you parameters






//  function greet(person : string   = 'Nilesh'){
//   return  `Good Morning ${person}`;
//  }

//  console.log(greet());



 //-------------- to annotate the return  value 



// Regualar function 
  
//  function double(x : number) : number {
//     return   x * x ;
//  }
//  console.log( double(5));

 
//---  arrow function ---------
 const add = (x : number) :number =>{
  return   x+x;
 }
 console.log(add(4));