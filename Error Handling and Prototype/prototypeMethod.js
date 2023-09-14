function Student(name) {
    this.name = name
}

Student.prototype.getDetails = function() {
    return `Hello my name is ${this.name}`
}

const s1 = new Student('Ankush')
console.log(s1.getDetails());