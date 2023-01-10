console.log('String is: 1) I am very good IT Developer');
var sentence = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
    char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
         
         counter = counter +1;
    }
    
}
console.log(`Total vowels are : ${counter}`);
console.log("--------------------------------------------");
console.log(`2) sum of cube number`);
function  sumOfCube() {
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        var cube = (index*index*index);
        sum = sum + cube;
      
        
    }
    console.log(`(1*1*1) + (2*2*2) + (3*3*3) + (4*4*4) + (5*5*5) : ${sum}`);

}
sumOfCube();

console.log("-----------------------------------------------");
function oddPosionedChars(string){
    console.log(`The Given String Is : ${string}.`);
    var emptyString = "";
    var myString = string.split(" ").join (" ");
    console.log(myString);
    for (let index = 0; index < myString.length; index++) {
        if (index % 2 != 0) {
            emptyString = emptyString + myString[index];
        }
        
    }
    console.log(`Odd positioned char in the string is : ${emptyString}.`);
}
oddPosionedChars("Hard work always pays back");
console.log(`----------------------------------------------`);
oddPosionedChars("soon I Will be Angular IT champ");