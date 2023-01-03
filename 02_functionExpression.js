var myName = "Kiran";
console.log(myName);
 
// function Expression :- we can store function as a value
var showResult = function  () {
console.log("shown...");
}
// console.log(showResult);
showResult();

// We can store function as a value in JS
var substraction = function( num1, num2){
    var result = num1 - num2 ;
console.log(result);
return result;

}
var result = substraction(45, 20); 
console.log(result);


var multifly = function(value1, value2, value3){
var result = value1 * value2 * value3 ;
console.log(result);
return result;
}
var result = multifly (100, 20, 20);

