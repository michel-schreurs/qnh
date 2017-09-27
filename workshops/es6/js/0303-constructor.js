// 0303-constructor.js


class Person{
	// constructor met drie parameters
	constructor(firstName = 'unknown', lastName='unknown', email='unknown'){
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	// method
	greet(){
		return `Hello ${this.firstName} ${this.lastName}`;
	}

	// method
	getEmail(){
		return this.email;
	}
}

let person = new Person('Peter', 'Kassenaar', 'info@kassenaar.com');
console.log(person.greet());		// Hello Peter Kassenaar
console.log('Je e-mailadres is:', person.getEmail()); // Je e-mailadres is: info@kassenaar.com