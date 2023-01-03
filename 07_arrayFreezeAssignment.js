console.log(`1. Creating object of personal Details...`);
const personalDetails = {
    name : "Kiran",
    education: "BSC-Computer Science",
    location: "Kolhapur",
    age: 25,
    gender: "Male",
}
console.log(`Personal Details are ==>`,personalDetails);

console.log(`-------------------------------------------------------------` );

console.log(`2. Creating object of College Details...`);
const collegeDetails = {
    clgName : "Dr. Ghali Collage, Gadhinlaj",
    location : "Kolhapur",
    university : "Shivaji University Kolhapur",
    departments : function(){
           console.log(`The  total 6 Departments in my collage is: Bachelor of Computer Science, Bsc IT, Bachelor of Computer Application, Bsc Mathametics, Bsc Statistics,, Bsc Chemistry`);
    }
}
console.log(`College Details are ==>`,collegeDetails);

console.log(`-------------------------------------------------------------`);

console.log(`After Merging above 2 Objects and logging details...`);
let mergeObjects = Object.assign(personalDetails,collegeDetails);
console.log(mergeObjects);

console.log(`-------------------------------------------------------------`);
console.log(`Creating an array of friends & freezing it`);
const arrayOfFriendsName = ["Gaju","1Nath", "Ramesh", "Sushant", "Ritesh"]
let freezeArray = Object.freeze(arrayOfFriendsName);
console.log(freezeArray);

console.log(`-------------------------------------------------------------`);
console.log(`Iterating step 4 using for of loop & log friend names...`);
for (const friendNames of freezeArray) {
    console.log(friendNames);
}

console.log(`-------------------------------------------------------------`);
console.log(`Given String is ==> "Codemind Technology" from which Reversing only "Technology" word...`);
var myString = "Codemind Technology";
var EmptyString = "";
for (let index = myString.length-1; index >= 9; index--) {
    var myString1 = myString.charAt(index);
    EmptyString= EmptyString + myString1;
    // console.log(myString[index]);      
}
var newString = "Codemind";
var concatString = newString+ " "+EmptyString;
console.log(concatString);