
class Bank {
    constructor (bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName,
        this.location = location,
        this.accountNo = accountNo,
        this.ifsc = ifsc,
        this.interestRate = interestRate;
    }
}
const axisBank = new Bank ("Axis Bank", "Mumbai", 8899889988, "UTIB0000004", "7%" );
const sbiBank = new Bank ("SBI Bank", "Pune", 7766776677, "SBIN0001817", "7.5%" );
const iciciBank = new Bank ("ICICI Bank", "Kolhapur", 1212121212, "ICIC0001045", "8%" );
const kotakBank = new Bank ("Kotak Bank", "Goa", 1313131313, "KKBK0001348", "7.8%" );
const hdfcBank = new Bank ("HDFC Bank", "Belgalore", 1414141414, "HDFC0000189", "8.2%");
const panjabBank = new Bank ("Punjab Bank", "Punjab", 1515151515, "PUNB0401400", "9%");

console.log(`Creating a following object`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);

console.log(``);
console.log(`Create a array of above object and traverse with using For loop and Bank Name and Location.`);
const arrayBanks = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, panjabBank]
for (const bankDetails of arrayBanks) {
    console.log(`${bankDetails.bankName}, ${bankDetails.location}`);
}
console.log(``);
console.log(`find the object which has name "Kotak Bank" using for loop`);
for (const element of arrayBanks) {
    if (element.bankName == "Kotak Bank") {
     console.log(element);   
    }
}

console.log(``);
console.log(`Log on deatils using normal for loop`);
for (let index = 0; index < arrayBanks.length; index++) {
    console.log(arrayBanks[index
    ]);
}





