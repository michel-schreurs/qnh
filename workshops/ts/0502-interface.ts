// 0502-interface.ts

// 1. interface definieren.
interface Person {
	firstName: string;
	lastName: string;
	email: string;
}

// 2. functie die interface als parameter gebruikt.
function fullName(person: Person): string {
	return `${person.firstName} ${person.lastName}`
}

// 3. Variabele maken op basis van interface
let person: Person = {
	firstName: 'Peter',
	lastName : 'Kassenaar',
	email    : 'info@kassenaar.com'
};

console.log(fullName(person));

// 4. optionele eigenschappen
interface PersonOptional {
	firstName?: string;	// optioneel
	lastName?: string; // optioneel
	email?: string; // optioneel
}

// 5. readonly eigenschappen
interface PersonReadonly {
	readonly id: number
	firstName: string;
	lastName: string;
	email?: string; // optioneel
}

let newPerson: PersonReadonly = {
	id       : 101,
	firstName: 'Peter',
	lastName : 'Kassenaar'
};

// newPerson.id = 102; // error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.

// 6. return type aangeven - basistype
function getFullName(person: Person): string {
	return `${person.firstName} ${person.lastName}`;
}

// 7. return type aangeven - interface
function createPerson(firstName: string, lastName: string, email: string): Person {
	let newPerson: Person = {
		firstName: firstName,
		lastName : lastName,
		email    : email
	};
	return newPerson;
}