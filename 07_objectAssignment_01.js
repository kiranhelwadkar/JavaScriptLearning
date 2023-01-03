let professor = {
    name : "Mr. Patil",
    gender : "Male",
    age : 55,
    city : "Kolhapur",
    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing",
        award : "Best Danser",
        allDegrees : function (){
            let certRes = this.engineering + " " + this.PHD + " " + this.award;
            return certRes;
        }
    } ,
    certificates : {
        cartificate1 : "Hacker Rank Participation",
        cartificate2 : "IFE Cource",
        cartificate3 : "Adv Programming"
    }
}
console.log(`-----------------------------------------------`);
console.log(`(1) All the Properties`);
console.log(professor);
console.log(`-----------------------------------------------`);
console.log(`(2) Include nested object "Degrees".`);
console.log(professor.degrees);
console.log(`-----------------------------------------------`);
console.log(`(3) Include nested object " certificates".`);
console.log(professor.certificates);
console.log(`-----------------------------------------------`);
console.log(`(4) Add function Which Will concate all the degrees.`);
console.log(professor.degrees);
let degree = professor.degrees.allDegrees();
console.log(`total Degrees of Processor are : "${degree}".`);
console.log(`-----------------------------------------------`);
console.log(`(5) Try to add new property.`);
professor.married = "yes"
console.log(professor);
console.log(`Added married Property.`);
console.log(`-----------------------------------------------`);
console.log(`(6) modify existing property.`);
professor.age = 58;
console.log(professor);
console.log(`Age is modified`);
console.log(`-----------------------------------------------`);
console.log(`(7) Delete any one certificate .`);
console.log(professor.certificates);
delete professor.certificates.cartificate1;
console.log(professor.certificates);
console.log(`certificate1 is deleted.` );
console.log(`-----------------------------------------------`);
console.log(`(8) Add new certificate in nested object "certificates"`);
professor.certificates.newCertificates = "CCC";
console.log(professor.certificates);
console.log(`Add new certifites`);
console.log(`-----------------------------------------------`);
console.log(`(9) Log the nested object certificates on console.`);
console.log(professor.certificates);