// 0503-class.ts

// 1. class definieren.
class Person {
	firstName: string;
	lastName: string;
	email: string;

	constructor(firstName: string, lastName: string, email: string) {
		this.firstName = firstName;
		this.lastName  = lastName;
		this.email     = email;
	}

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// 2. Nieuw persoon instantieren
let person: Person = new Person('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log('Persoon via class: ', person.fullName());

// 3. class definieren met shorthand notation.
class PersonShorthand {

	constructor(public firstName: string,
				public lastName: string,
				public email: string) {

	}

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// 4. Nieuw persoon instantieren op basis van shorthand notatie
let personShorthand: PersonShorthand
		= new PersonShorthand('Wytze', 'Hellinga', 'wytze@hellinga.nl');
console.log('Persoon via shorthand notatie: ', personShorthand.fullName());

// 5. Naam aanpassen
personShorthand.firstName = 'Henk';
personShorthand.lastName = 'De Vries';
console.log('Persoon via shorthand notatie: ', personShorthand.fullName());
