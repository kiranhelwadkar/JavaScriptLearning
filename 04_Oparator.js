
var num1 = 10;
var num2 = 5;
console.log(`===================Arithmatic Oparator==================`);
var addResult =  num1 + num2;
console.log(`Addition is ${addResult}`);

var subResult =  num1 - num2;   
console.log(`Addition is ${subResult}`);

var mulResult =  num1 * num2;
console.log(`Addition is ${mulResult}`);

var divResult =  num1 / num2;
console.log(`Addition is ${divResult}`);

var modulusResult = num1 % num2;
console.log(`Modulus is ${modulusResult}`);
console.log(``);

console.log(`=================Assignment OPdarator===================`);

var modulusResult = num1 % 3;
console.log(`Modulus is ${modulusResult}`);
console.log(``);
console.log(`========Compound Addition=========`);
num1 += num2;
console.log(`Compound Addition ${num1}`);
console.log(`Compound substraction ${num1-=num2}`); 
console.log(``);

console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10;
var result = num1 > num2;
console.log(`> Operator - Greater Than ${result}`);
console.log(``);
var result = num1 < num2;
console.log(`< Operator - less Than ${result}`);

var result = num1 >= num3;
console.log(`>= Operator - Greater Than Equal ==> ${result}`);

var result = num1 <= num3;
console.log(`<= Operator - less Than Equal ==> ${result}`);

var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70;
console.log(`strAdd is: ${strAdd}`);

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr; // Explicit conversion
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`== comparison ${20 == "20"}`); // Implicit conversion

var myNumber = -77.333;
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);


