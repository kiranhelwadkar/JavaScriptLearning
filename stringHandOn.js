console.log("============ String template ============");
var statement = "Hey you are doing good, keep it up";
var complimentSentence = statement;
console.log(`1)..${complimentSentence}`);

var statement = "  Hey you are doing good, keep it up    ";

var statementLength = statement.length;
console.log(`2)..The length of a Sring is ${statementLength}`);

var resultTrim = statement.trim();
var totalLength= resultTrim.length;
console.log("3).", resultTrim, "Length After trim :" , totalLength);

console.log(`4)..The first characters of string`, resultTrim.charAt(0), `The last character of string `, resultTrim.charAt(totalLength-1));

 var stringSplit= resultTrim.split(" ");
 console.log("5)..The count of total words in a given String", stringSplit.length);

 console.log(`6)..The index of Word "good" is ` ,resultTrim.indexOf("good"));

 console.log(`7)..The substring starting from index 22`,resultTrim.substring(22));

 var resultSlice= resultTrim.slice(22);
 console.log(`8)..With slice starting from index 22`,resultSlice);

 console.log(`9)..The string ends with word "up"`,resultTrim.endsWith("up"));
 console.log(`10).The string starts with word "Hey"`,resultTrim.startsWith("Hey"));

// stringHandsOn();