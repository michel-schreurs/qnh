// 0503-class.ts

// Mag iemand wijzigen?
let canChange: boolean = true; // Dit door authentication service laten checken!

// 1. class definieren.
class PersonPrivate {
	// private variables
	private _firstName: string;
	private _lastName: string;
	private _email: string;

	constructor(firstName, lastName, email) {
		this._firstName = firstName;
		this._lastName  = lastName;
		this._email     = email;
	}

	// custom getters and setters
	get firstName() {
		return this._firstName;
	}

	set firstName(value) {
		if (canChange && canChange === true) {
			this._firstName = value;
		}
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		if (canChange && canChange === true) {
			this._lastName = value;
		}
	}

	get email() {
		return this._email;
	}

	set email(value) {
		if (canChange && canChange === true) {
			this._email = value;
		}
	}
}

// 2. Nieuw persoon instantieren
let personPrivate: PersonPrivate = new PersonPrivate('John', 'Damen', 'john@damen.nl');
//console.log('private variable: ', personPrivate._firstName); // "Property '_firstName' is private and only accessible within class 'PersonPrivate'."
console.log('Voornaam via getter: ', personPrivate.firstName);
console.log('Voornaam instellen via setter: ', personPrivate.firstName = 'Harry');
console.log('Nieuwe voornaam via getter: ', personPrivate.firstName);
