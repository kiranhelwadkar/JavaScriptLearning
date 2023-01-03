console.log(`--------------------------------------------------`);
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode
 }
 Bank.prototype.openTime = "9AM IST";
 Bank.prototype.closeTime = "6PM IST";
 let bank1 = new Bank("SBI Bank"," Mumbai","SBI000045","1234");
 let bank2 = new Bank("Mah Bank"," Kolhapur","MHB000055","1345");
 let bank3 = new Bank("AXIS Bank"," Goa","AXS000077","1456");
 let bank4 = new Bank("YES Bank"," Pune","YES000065","1567");
 console.log("Bank details is:","Bank Name:", bank1.bankName, ",Loaction:", bank1.location,",ifsc code:",  bank1.ifscCode,",Branchcode:", bank1.branchCode);
 console.log("Bank details is:","Bank Name:", bank2.bankName, ",Loaction:", bank2.location,",ifsc code:",  bank2.ifscCode,",Branchcode:", bank2.branchCode);
 console.log("Bank details is:","Bank Name:", bank3.bankName, ",Loaction:", bank3.location,",ifsc code:",  bank3.ifscCode,",Branchcode:", bank3.branchCode);
 console.log("Bank details is:","Bank Name:", bank4.bankName, ",Loaction:", bank4.location,",ifsc code:",  bank4.ifscCode,",Branchcode:", bank4.branchCode);
 console.log(``);

console.log(`------------------------------------------------`);
 console.log(`The bank is open time is ${bank1.openTime}`);
console.log(`The bank close time if ${bank1.closeTime}`);
console.log(``);
console.log(`--------------------------------------------------`);
console.log("SBI bank open time is:",bank1.openTime,",SBI bank close time is", bank1.closeTime );
console.log(``);

console.log(`--------------------------------------------------`);
console.log("closing time of Axix Bank :","Bank Name:", bank3.bankName, "close time is", bank3.closeTime );
console.log(``);

console.log(`------------------------step 7--------------------------`);
console.log("The deatils of Yes Bank is:",bank4.bankName,"YES Bank IFSC code is:", bank4.branchCode,"and the open time is:",bank4.openTime);

 
