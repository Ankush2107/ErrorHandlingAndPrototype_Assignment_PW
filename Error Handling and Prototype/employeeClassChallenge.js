class Employee{

    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }
}

const employee1 = new Employee('Ankush', 'CEO', 100000)
const employee2 = new Employee('Karan', 'Founder', 200000)

console.log(employee1.getSalary());