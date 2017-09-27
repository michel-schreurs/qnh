//2.3 arrow function

// 1. ES5
var oldLogger = function (msg) {
	console.log(msg);
};
oldLogger('1. oldLogger:  Hallo ouderwets ES5!');

// 2. ES6, met arrow function
let newLogger = (msg) => console.log(msg);
newLogger('2. newLogger: Hallo ES6 met arrow functions!');

// 3. Arrow function met meerdere regels
let greeter = (name, age) => {
	let msg = `Hallo ${name}, je bent ${age} jaar.`;
	return msg;
}
console.log(greeter('Feline', 10));