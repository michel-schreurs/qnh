// 1. Maak een var
var age = 55;

// 2. ES5: var gebruiken
for (var j = 0; j < 5; j++) {
	age += 5;
}
console.log('1. Leeftijd is nu: ' , age);

try {
	console.log('var j bestaat nog steeds: ', j);
} catch (e) {
	console.log('j is out of scope');
}

// 3. ES6:  let gebruiken
age = 55; // reset;
for (let i = 0; i < 5; i++) {
	age += 5;
}
console.log('2. Leeftijd is nu: ' , age);

try {
	console.log(i);
} catch (e) {
	console.log('i is out of scope omdat we let gebruiken!');
}

// 4. ES6 : const
let foo = 'foo';
foo = 'bar';
console.log('variabele is nu: ', foo); // Gaat prima: 'bar'

const bar = 'baz';
//bar = 'qux'; // TypeError: "bar is read-only" of "Assignment to constant variable"