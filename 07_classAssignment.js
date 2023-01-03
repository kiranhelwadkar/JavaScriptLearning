class Vehicle {
    constructor (name, engine, price, seater, awarage, fuel){
    this.name= name;
    this.engine = engine;
    this.price = price;
    this.seater = seater;
    this.awarage = awarage;
    this.fuel = fuel;
}
}
console.log(`--------------------Question 1-----------------------`);

let VehThar = new Vehicle ("Thar", "1997 cc - 2184 cc", "Rs13.59 - 16.29 Lakh",  4, "15.2 kmpl", "Diesel/Petrol");
let VehToyoto = new Vehicle ("Toyoto Innova Crysta", "2694 cc", "18.09 - 23.83 Lakh", 8, "20.2 kmpl", "Petrol");
let VehNexon = new Vehicle ("Tata Nexon", "1199 cc - 1497 cc", "7.70 - 14.18 Lakh", 5, "22.2 kmpl", "Diesel/Petrol");
let VehBrezaa = new Vehicle ("Maruti Brezza", "1462 cc", "7.99 - 13.96 Lakh", 5, "19.8 kmpl", "Petrol");
let VehYamaha = new Vehicle ("Yamaha FZS", "149 cc", "1.21 - 1.24 Lakh", 2, "4.2 kmpl", "Petrol");

console.log(VehThar);
console.log(VehToyoto);
console.log(VehNexon);
console.log(VehBrezaa);
console.log(VehYamaha);
console.log(``);
console.log(`--------------------Question 2-----------------------`);
    

console.log(`Collage deatails`);
class CollageDeatails {
    constructor (name, location, founder, founded , departments,    ){
    this.name= name;
    this.location = location;
    this.founder = founder;
    this.founded = founded;
    this.departments = departments;
}
}
let collageGhali = new CollageDeatails ("Dr. Ghali Collage, Gadhinglaj", "The founder of the collage is Dr. S. S. Ghali", "Its founded established on 20th August, 1963", "Gadhinglaj", "BBA, B.Sc, M.Sc, BA, MA, MCA," );

console.log(collageGhali.name, collageGhali.location, collageGhali.founded, collageGhali.founder,  collageGhali.departments);

for (const key in CollageDeatails) {
    if (Object.hasOwnProperty.call(CollageDeatails, key)) {
        const element = CollageDeatails [key, CollageDeatails];
        console.log(element);
        
    }
}

console.log(`--------------------Question 3-----------------------`);
console.log(``);
const collageDeatails = {
    name : "Dr. Ghali Collage, Gadhinglaj",
    location :  "Gadhinglaj",
    founder : "Dr. S. S. Ghali",
    founded : 1963,
    departments : "BBA, B.Sc, M.Sc, BA, MA, MCA",
}

    for (const key in collageDeatails) {
        if (Object.hasOwnProperty.call(collageDeatails, key)) {
            const element = collageDeatails [key];
            console.log(element);
        }
    }
