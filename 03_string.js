var greet = "Good Morning";
console.log("Given string is", greet);

console.log("Total character in the string is:", greet.length);


console.log("======== concat() ==========");
var firstName = "Kiran ";
var lastName = "Helwadkar";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Bhikaji " ,lastName);
console.log("Concatenation using concat(): ", result);

// using Index of instring
var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

var greet = "Good Morning";
var greetAfterReplace =  greet.replace("Morning", "Afternoon");
console.log("Replace substring Morning with Afternoon:  ", greetAfterReplace);

console.log(greet.replace("Mor" , "Eve"));

console.log(greet.toUpperCase("Morning"));
console.log(greet.toLowerCase("Morning"));

var greet = "Good Morning";
console.log("Include()", greet.includes("Good"));

console.log( greet.replace("Mor", "Eve"));

// console.log("To upper case", greet.toUpperCase());
// console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log( "slice() with Negative index ",greet.slice(-7));
console.log( "slice() with Negative start and End index ",greet.slice(-7, -2));

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log("Total words in sentence string is: ", wordsInSentence.length);

console.log("======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);


var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName );

console.log(`First name is: ${firstName} and last name is ${lastName}`);



