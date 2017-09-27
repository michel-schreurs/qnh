// 0301-functions-classes.js

//************************
// ES5 : functie als een class
//************************
var PersonES5 = (function () {
	function PersonES5() {
	}
	PersonES5.prototype.greet = function (name) {
		return 'Hello ' + name;
	};
	return PersonES5;
}());

// ES5 implementatie
var personES5 = new PersonES5();
console.log(personES5.greet('Peter (function)'));  // Hello Peter (function)

//************************
// ES6 :  nieuwe keyword class
//************************
class PersonES6{
	greet(name){
		return `Hello ${name}`;
	}
}

let personES6 = new PersonES6();
console.log(personES6.greet('Peter (class)')); // Hello Peter (class)