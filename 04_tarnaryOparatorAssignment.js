// var n1 = 10;
// var n2 = -10;
//  var result = n1 > n2 ? n1 : n2;
//  console.log(result);
console.log(`-----------Question 1---------`);
console.log(``);
var greaterNumber = function (n1, n2){
var result = n1 > n2 ? n1 : n2;
console.log(`The gratest numer is ${n1} or ${n2}  = ${result} is greatest number`);
}
greaterNumber (10, -10);
greaterNumber (800, 899);
console.log(``);

console.log(`-----------Question 2---------`);
console.log(``);
var oddAndEven = function (number){
var result = number%2==0 ? "true" :  "false";
console.log(`The given number ${number} is ${result}`);
}
oddAndEven (29);
oddAndEven (44);
oddAndEven (0);
oddAndEven (101);
console.log(``);
console.log(`-----------Question 3---------`);
console.log(``);
var evenOddLength = function (Value){
    var result1 = Value.length%2==0 ? `The length Of Word "${Value}" is EVEN.`:
    `The length of Word "${Value}" is ODD.`;
    console.log(result1);
}
evenOddLength("JavaScript");
evenOddLength("Developer");
evenOddLength("Google");

console.log(`---------Assignmrnt 2-------------`);
console.log(``);

console.log(``);

console.log(`-------------Question 1--------------`);

var maleMarriageEligibility = function (gender,age,boyName){
    var result = (gender="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage.`:
    `Hey ${boyName} you are not eligible for marriage. \n`;
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Steve Jobs");

console.log(`-------------Question 2--------------`);


var femaleMarriageEligibility = function (gender,age,girlName){
     var newResult = (genderß="Female" && age>=21) ? `Hey ${girlName} you are eligible for marriage.`:
      `Hey ${girlName} you are not eligible for marriage.`
      console.log(newResult);
}
femaleMarriageEligibility("Female",17,"Jennifer");
femaleMarriageEligibility("Female",27,"Milinda Gates");