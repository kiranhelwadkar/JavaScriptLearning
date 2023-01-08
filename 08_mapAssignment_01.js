// console.log(`-----------------------------------------------------------`);
class Bank {
    constructor(bankName,location,accountNo,ifsc,intrestRate){
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.intrestRate=intrestRate;
    }
}
// console.log(` Created the class `);
// console.log(`-----------------------------------------------------------`);
let axisBank = new Bank ("Axis Bank", "Mumbai", 8899889988, "UTIB0000004", "7%" );
let sbiBank = new Bank ("SBI Bank", "Pune", 7766776677, "SBIN0001817", "7.5%");
let iciciBank = new Bank ("ICICI Bank", "Kolhapur", 1212121212, "ICIC0001045", "8%");
let kotakBank = new Bank ("Kotak Bank", "Goa", 1313131313, "KKBK0001348", "7.8%");
let hdfcBank = new Bank ("HDFC Bank", "Belgalore", 1414141414, "HDFC0000189", "8.2%");
let punjabBank = new Bank ("Punjab Bank", "Punjab", 1515151515, "PUNB0401400", "9%");

const mapOfBanks = new Map ();
mapOfBanks.set(8899889988, axisBank);
mapOfBanks.set(7766776677, sbiBank);
mapOfBanks.set(1212121212, iciciBank);
mapOfBanks.set(1313131313, kotakBank);
mapOfBanks.set(1414141414, hdfcBank);
mapOfBanks.set(1515151515, punjabBank);

// console.log(`Created Objects of various banks`);
console.log(`-----------------------------------------------------------`);
console.log(`Create the map in such a way that key should be Bank account number and value is object.`);
const keysOfMapBanks = mapOfBanks.keys();
console.log(`Account number as a key :`);
console.log(keysOfMapBanks);
console.log(`Value of particular keys :`);
console.log(mapOfBanks.get(8899889988));
console.log(mapOfBanks.get(7766776677));
console.log(mapOfBanks.get(1212121212));
console.log(mapOfBanks.get(1313131313));
console.log(mapOfBanks.get(1414141414));
console.log(mapOfBanks.get(1515151515));
console.log(`-----------------------------------------------------------`);

console.log(`Traverse the map and log Bankname, account number and interest rates.`);
for (const key of keysOfMapBanks) {
    const bank = mapOfBanks.get(key);
    console.log(bank.bankName, bank.accountNo, bank.intrestRate);
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);