class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);

console.log(emp.Bill.name, emp.Bill.age, emp.Bill.city, emp.Bill.id);



function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);
 console.log(s1.rollNo);
 let s2 = new Student("Jenny", 22, 35);
 console.log(s1);


let isInstance = s1 instanceof Student;
console.log(isInstance);
// Object is an instance of class
