//2.2 template literals en string interpolation

// ES5
var name = 'Theo';
var age = 22;
var msg = 'Mijn naam is ' + name + ' en ik ben ' + age + ' jaar. ';
console.log(msg);

// Toggle commentaren om verschillende uitvoer te zien.

// ES6
// let name = 'Theo';
// let age = 22;
// let msg = `Mijn naam is ${name} en ik ben ${age} jaar.`;
// console.log(msg);

// Multiline strings
let htmlString = `
	<h2>Dit is een multi-line string uit ES6</h2>
	<p>lorem ipsum dolor sit...</p> 
`;
document.querySelector('#result').innerHTML = htmlString;