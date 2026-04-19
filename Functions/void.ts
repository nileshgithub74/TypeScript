// void is a type that represents the absence of any value it is oftern used as the return for function that do not return a value





function printMessage(message : string) : void{
  console.log(`hey this is ${message} and how aer u ?`);
}

printMessage("Nilesh");



 


/// Never : 

      // the never  keyword is used to indicate that a function will not return anything , or that a vaiable can never have a value.The never is useful for indicating that certain code paths should be reach or that certainn values are impossible. it can help catch erros at compile-time instead of runtime.


  //  Never : where it is used

  // // 1. A function that always throws an error
  //   2. A function that has an infinite loops
  //   3. A variable that can never have a value .






// functioin that throw an error

  function throwError(msg : string) : never{
    throw new Error(msg);
  }

  console.log("cannot able to fetch the data");

  // Infinite Loops

const infiniteLoop =() :never=>{
  while(true){}
}


// varaible that can never have a value 

let x  : never;

function neverReturns():never{
  while(true){}
}
x = neverReturns();