function getPerson(person) {
    try {
        if (typeof person !== "object" || !person.name || !person.age) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}
  

console.log(getPerson({ name: "Mithun", age: 20 })); 
console.log(getPerson({name: 'Ankush', age: 22}));
console.log(getPerson({ name: "Mithun" })); 
console.log(getPerson(["name", "Mithun"])); 
  