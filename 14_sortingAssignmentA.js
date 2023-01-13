const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`-----------------Given array---------------`);
console.log(arrayRollNumber);
console.log(``);
console.log(`-----------------Reverse the Array-----------------`);
arrayRollNumber.reverse();
console.log(arrayRollNumber);

console.log(``);
console.log(`-----------------Use sort () without using any custom logic----------------`);
arrayRollNumber.sort();
console.log(arrayRollNumber);

console.log(``);
console.log(`-----------------sort the arrayin ascending order ----------------`);
arrayRollNumber.sort ((a ,b )=>{
return a>b ? 1 : -1;
})
console.log(arrayRollNumber);

console.log(``);
console.log(`---------------Find greatest number of given array----------------`);
console.log(arrayRollNumber);
let greatestElement = arrayRollNumber[arrayRollNumber.length-1]
console.log(`The last greatest of given array is ${greatestElement}`);

console.log(``);
console.log(`---------------Find smallest number of given array-------------------`);
console.log(arrayRollNumber);
let smallestElement = arrayRollNumber [0];
console.log(`The smallest element of given array is ${smallestElement}`);

console.log(``);
console.log(`-------------------- Remove duplicate element of given array--------------------`);
console.log(arrayRollNumber);
let duplicateElement = new Set(arrayRollNumber);
console.log(duplicateElement);