// Union in the typescript:

const printPassMarks = (name: string | number) => {
  return `Pass marks of the students is :${name} `;
};

const r1 = printPassMarks(23);
console.log(r1 + " --------");
const r2 = printPassMarks("Two");

// console.log(r2);

// function that take Number or String as the input and print it

let combine = (s1: number | string, s2: string | number) => {
  let result;

  if (typeof s1 === "number" && typeof s2 === "number") {
    result = s1 + s2;
  } else {
    result = s1.toString() + s2.toString();
  }
  return result;
};


let sum2= combine(20, 10);
let fullname = combine(" nilesh", " kumar ");

console.log(combine(sum2, fullname));