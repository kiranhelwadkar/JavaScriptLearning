const arrayNumber =  [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(``);
console.log(`The provided array is ${arrayNumber}`);
console.log(``);
console.log(`Log all array element on console using for loop`);
arrayNumber.forEach(function(currentValue, index, array){
    console.log(`The element is : ${currentValue} and the index of number is : ${index}`  );
    }  );
console.log(``);
    console.log(`---------------------The positive numbers of given array --------------------------------`);
    let positiveValue = [];
    arrayNumber.forEach((currentValue)=>{
        if(currentValue > 0) {
            positiveValue.push(currentValue)
        }
    });
    console.log(positiveValue);

    console.log(`---------------------The positive numbers of given array --------------------------------`);
    let negativeValue = [];
    arrayNumber.forEach((currentValue)=>{
        if(currentValue < 0) {
            negativeValue.push(currentValue)
        }
    });
    console.log(negativeValue);

    console.log(``);
    console.log(`---------------Find the even number of given array---------------`);

    let evenNumber = [];
    arrayNumber.forEach((currentValue)=>{
        if(currentValue%2 == 0) {
            evenNumber.push(currentValue)
        }
    });
    console.log(evenNumber);
console.log(``);
console.log(`----------------The sum of total element of given array -------------`);
let sum = 0;
arrayNumber.forEach((currentValue) =>{
    sum = sum + currentValue;
})
console.log(sum);

console.log(``);
console.log(`----------------The even positioning value of given array -------------`);
let evenPosition = [];
arrayNumber.forEach((currentValue, index)=>{
    if(index%2==0) {
        evenPosition.push(currentValue)
    }
});
console.log(evenPosition);

