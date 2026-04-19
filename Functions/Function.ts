const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(13, 17);
// console.log(result);

let combinedFunction: (a: number, b: number) => number;

combinedFunction = add;

console.log(combinedFunction(20, 20));

//function with the callback

const addhandler = (n1: number, n2: number, cb: (result: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addhandler(10, 20, (result: number) => {
  console.log(result);
});
