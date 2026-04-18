//!  Types :   Type Aliases can be used for primitives like string




type Car = {
  year: number;
  name: string;
  price: string;
};

const car: Car = {
  year: 2004,
  name: "lambo",
  price: "1cr",
};


console.log(car.year);
console.log(car.name);



//!  Interface :  Mostly use for the  object types: 

interface Rectangle {
  height: number,
  weight: number
}

const rectangle: Rectangle = {
  height: 20,
  weight: 41
};


