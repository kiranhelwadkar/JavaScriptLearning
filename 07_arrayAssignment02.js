const arrayNumbers= [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`The provided  array is :`);
console.log(arrayNumbers);
let totalLength = arrayNumbers.length;
console.log(   `The total lenght of provided array is : ${totalLength}`);
console.log(``);

console.log(`-----------First and last element of provided array is`);
console.log(`First element of provided array is: ${arrayNumbers[0]}`);
console.log(`Last element of provided array is: ${arrayNumbers[totalLength-1]}`);

console.log(``);
let thirdLast = arrayNumbers[totalLength - 3];
console.log(`The Third last element in provided array is ${thirdLast}`);

console.log(``);
console.log();
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenNumArray = evenNumArray.concat(element);
  }
}
console.log(`The even number of provided array is: ${evenNumArray}`);
console.log(``);

let oddNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddNumArray = oddNumArray.concat(element);
  }
}
console.log(`The odd number of provided array is :${oddNumArray}`);
console.log(``);

var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`The even position of provided array is : ${pos}`);
console.log(``);

var pos = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 != 0) {
    pos = pos.concat(arrayNumbers[index]);
  }
}
console.log(`The odd position of provided array is :${pos}`);
console.log(``);

let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(`The sum of total element is: ${sumOfElements}`);
console.log(``);

let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(`The multiply by 5 total element is : ${multiple}`);
console.log(``);
let numAvailable = arrayNumbers.includes(115);
console.log(`The number of 115 available in provided array: ${numAvailable}`);
console.log(``);

let isAvailable = arrayNumbers.includes(23);
console.log(`The number of 23 available in provided array: ${isAvailable}`);

console.log(``);
arrayNumbers.splice(3,0,55,66);
console.log(`Inserting 55, 66 before index 3 : ${arrayNumbers}`);
console.log(``);

arrayNumbers.splice(4,3);
console.log(`Deleted starting 3 element in provided array ${arrayNumbers}`);