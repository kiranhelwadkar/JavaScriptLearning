console.log(`=============================================`);
const car ={
    carName : "Creta SX",
    compony : "Hyundai",
    lunachYear : 2017
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP",
    }
    const newCarEngine = Object.assign(car, carEngine);
    console.log(`Mearge Car and Car Engine using Object assignment `);
    console.log(newCarEngine);
    console.log(`==========================================`);
    console.log(`Merge Car and Car Engine`);
    const myCarEngine = {... car, ...carEngine};
    console.log(myCarEngine);
    console.log(`==========================================`);