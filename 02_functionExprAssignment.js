console.log("=====Question 1=====");

var square = function(num){
    console.log("Square of",  num , "=" , num*num);
}
square (5);
square (6);
square (25);
square (100);
console.log(typeof square);

console.log("=====Question 2=====");
 
var area = function(value1, value2){
    console.log("Area of rectange is", "=", value1 * value2);
}
area(499,917);
console.log("=====Question 3=====");
var swapVaues = function( value1, value2){
    // console.log("=======Swap Value=======");
    console.log("====Before swap====");
    console.log(value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("====After swap====");
console.log(value1, value2);
}
swapVaues("Virat", "Anuskha")
swapVaues(1000, 2000)
console.log("=====Question 4=====");
var string = "JS the most popular language";
console.log("Given string is", string);

console.log("Total charactor in the string is:", string.length);
console.log("charactor at index 6 is:", string.charAt(6));
console.log("charactor at index 11 is:", string.charAt(6));
console.log("Lenght of character is:", string.length);
console.log("charactor at index 11 is:", string.charAt(6));
var lenghtTotal = string.length;
console.log("Last Charactor in given string is", string.charAt(lenghtTotal-1));
console.log("First Charactor in given string is", string.charAt(0));
// var square = function(num){
//     console.log("Square of",  num , "=" , num*num);
// }
square (28);

 











