//! Enum : Reprsent the group of the costant values that can never be changes.

//!  types of enum : string or number , we can assign this valeus.  

//! default value of enum : starts from  0   examples :   belwo example if north is not assigned with  the values then it will give the ouptut zero ;






// enum Direction {
//   North =10 ,
//   south=20,
//   east=3,
//   West=1,
// }

// const currDirection = Direction.east;

// console.log(currDirection);

// currDirection = "northwest"; //! this should not works because this is constant and values cant be changed




//enum with the string



enum direction {
    North ="North", 
    South = " South ",
    East = "east",
     West = "west"
}

let currDirection = direction.East;
console.log(currDirection);

