var employees = [];

function Employee(name, jotTitle, salary) {
    this.name = name;
    this.jobTitle = jotTitle;
    this.salary = salary;
    this.status = "Full Time";
}
Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle +", Salary: " + this.salary + ", Status: " + this.status); 
}

var worker = new Employee("Joe", "Chef", "$70k");
worker.status = "Contract";
worker.printEmployeeForm();

var worker1 = new Employee("John", "Dish Washer", "$20k");
worker1.printEmployeeForm();

var worker2 = new Employee("Jane", "Owner", "$100k");
worker2.printEmployeeForm();

employees.push(worker, worker1, worker2);
console.log(employees)