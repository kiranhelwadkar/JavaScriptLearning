class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 4750000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let mapOfEmployees = new Map();
mapOfEmployees.set(22, emp_anil);
mapOfEmployees.set(33, emp_radha );
mapOfEmployees.set(55, emp_rishi );
mapOfEmployees.set(66, emp_sonali );
mapOfEmployees.set(77, emp_monika );
mapOfEmployees.set(88, emp_viny );
mapOfEmployees.set(99, emp_mahi );
console.log(`Details of Employees is:-`);
mapOfEmployees.forEach((value, key)=>{
    console.log(`${key}--->  Name:- ${value.emp_name}, Dept:-  ${value.emp_dept}  Company:-  ${value.emp_company},  Salary:- ${value.emp_salary}`);
})