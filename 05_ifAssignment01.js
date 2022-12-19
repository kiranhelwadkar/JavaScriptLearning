console.log(`-----------Assignment 1-----------`);

var ageCheck = function (age) {
    if (age>18 && age<120) {
    console.log(`Your age ia "${age}" = You are eligible for voting`);
    }   
    if (age<18 && age>0){
        console.log(`Your age is "${age}" = You are not eliible for voating`);
    }
    if (age<=0 || age>120){
        console.log(`Your age is "${age}" = Invalid data`);
    }
}
ageCheck (45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);

var gradCalculation = function (marks) {

    if (marks>=90 && marks<100){
    console.log(`Fantastic marks: "${marks}" Your Grade is A`);
}
if (marks>=75 && marks<90){
    console.log(`Fantastic marks: "${marks}" Your Grade is A`);
}
if (marks>=50 && marks<100){
    console.log(`Fantastic marks: "${marks}" Your Grade is B`);
}
if (marks>=35 && marks<50){
    console.log(`Fantastic marks: "${marks}" Your Grade is C and Need improvement`);
}
if (marks<=0 && marks>100){
    console.log(`Fantastic marks: "${marks}" Please provide valid data`);
}
}
// gradCalculation(98);
// gradCalculation(80);
// gradCalculation(90);
// gradCalculation(0);
// gradCalculation(150);
// gradCalculation(-7);
// gradCalculation(35);
// gradCalculation(29);



