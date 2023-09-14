class Person {

    constructor(name = 'unknown', age = 0) {
        this.name = name
        this.age = age
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const p = new Person()
console.log(p.getDetails());