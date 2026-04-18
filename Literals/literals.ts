
// Literal : allow the exact values (type ) assing to the variables


// let direction : "north"| "south"| "east"| "west";

// direction = "north";




//! string literal with the functions


const movingDirection = (direction :"north"| "south"| "east"| "west" )=>{
    console.log(`Moving direction is : ${direction}`);
}

// movingDirection("north");


//! number literal 

const diceRoll  =() : 1|2|3|4|5|6 =>{

    return Math.floor(Math.random()* 6)+ 1 as 1|2|3|4|5|6 ;

}

const diceNumber = diceRoll();
console.log(diceNumber);


