// ES5, geen lexical this. Caching nodig om properties te bereiken binnen geneste functies.
function Car() {
	var self = this; // caching 'this' in local variable
	self.seats = 4;

	self.timeout = function () {
		setTimeout(function () {
			self.seats++;
			console.log('ES5: Meer stoelen in het 2017 model: ', self.seats);
		}, 1000)
	}
}
var car = new Car();
car.timeout();

// ES6, geen noodzaak meer tot caching door gebruik van this.
// Let op keyword class en de constructor
class CarLexicalThis {
	constructor() {
		this.seats = 6;
	}

	timeOut() {
		setTimeout(() => {
			this.seats++;
			console.log('ES6: Nog meer stoelen met ES6!: ', this.seats);
		}, 1000)
	}
}
let carLexicalThis = new CarLexicalThis();
carLexicalThis.timeOut();
