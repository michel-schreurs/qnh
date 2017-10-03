// 0502-interface.ts
// 2. functie die interface als parameter gebruikt.
function fullName(person) {
    return person.firstName + " " + person.lastName;
}
// 3. Variabele maken op basis van interface
var person = {
    firstName: 'Peter',
    lastName: 'Kassenaar',
    email: 'info@kassenaar.com'
};
console.log(fullName(person));
var newPerson = {
    id: 101,
    firstName: 'Peter',
    lastName: 'Kassenaar'
};
// newPerson.id = 102; // error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
// 6. return type aangeven - basistype
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
// 7. return type aangeven - interface
function createPerson(firstName, lastName, email) {
    var newPerson = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    return newPerson;
}
