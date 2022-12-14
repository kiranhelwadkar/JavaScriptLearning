console.log("1)");
 var squareOfWordLength = function (value) {
     
    console.log(`length of the word "${value}" is ${value.length} and its square is ${value.length*value.length}.`);
  
}
squareOfWordLength("JavaScript");
squareOfWordLength("google Chrome");
squareOfWordLength("developer Smart");
console.log(`==============================================`);

console.log("2)");
var newFunction = function( ){
 var string = "I am angular devloper";
 var wordsInSentenrnce = string.split(" ");
 console.log(`the length of the string is ${string.length}. total number of words in string is ${wordsInSentenrnce.length}. \n after dividing length by number of words ans is ${string.length/wordsInSentenrnce.length}`);
 console.log(`=============================================`);
 console.log("3)");
 console.log( `After multiplication the ans is ${string.length*wordsInSentenrnce.length}`);

} 
newFunction();