class Car {

    constructor(company, model, year) {
        this.company = company
        this.model = model
        this.year = year
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

const obj = new Car('BMW', 'new', 2023);
console.log(obj.getDescription());