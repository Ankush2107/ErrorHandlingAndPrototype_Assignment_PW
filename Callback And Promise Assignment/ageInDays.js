const personInfo = {
    firstName: "Ankush",
    lastName: "Kumar",
    age: 22,
};

function ageInDays(person) {

    const fullName = `${person.firstName} ${person.lastName}`
    const age = person.age * 365

    function logAgeMessage() {
        console.log(`The person's fullname is ${fullName} and their age in days is ${age}.`);
    }

    return logAgeMessage
}
  
const logAgeMessage = ageInDays(personInfo); 
logAgeMessage(); 
  