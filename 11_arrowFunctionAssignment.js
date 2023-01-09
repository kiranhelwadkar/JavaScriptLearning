console.log(`---------------With no argument and return value----------------------`);
let senatance = () =>{
    console.log("Good Morning, Today is Monday");
}
senatance();

console.log(``);
console.log(`---------------------------with 3 Argument and no rerurn value for received 3 Parameter perform multification--------------`);
let number = (n1, n2, n3) =>{
console.log(n1*n2*n3);
}
console.log(`The multification of number 5, 5, 2:`); number(5, 5, 2);

console.log(`The multification of number 10, 4, 1:`); number(10, 4, 1);
console.log(``);
console.log(`----------------------------Addtion of 5 Parameters and just log on return-------------------------`);

let myNumber = (value1, value2, value3, value4, value5)=> {
    console.log( value1 + value2 + value3 + value4 + value5 );
}
console.log(`The sum of 100, 100, 200, 349, 756:`); myNumber(100, 100, 200, 349, 756);
console.log(`The addition of given string is:`);
myNumber("I am", " learning", " ES6", " features", " in depth" )