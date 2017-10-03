// 0501-types.ts
//export {}; // om errors ("cannot redeclare block-scoped variabele...") bij gebruik van dezelfde variabelenaam elders in de downloads te voorkomen. Normaal gesproken is deze regel niet nodig.
// 1. Gegevenstype boolean
var isCustomer = true;
var hasEmail = false;
//hasEmail = 'Yes'; // error TS2322: Type '"Yes"' is not assignable to type 'boolean'.
// 2. Gegevenstype number
var decimal = 10;
var floatingPoint = 5.95;
var hex = 0xAA99CC;
var binary = 50;
var octal = 503;
// 3. Gegevenstype string
var name123 = 'Peter';
var email = 'info@kassenaar.com';
name123 = 'Sandra'; // geldig
// 4. String interpolation, template literals, of template strings
var msg = "Mijn naam is " + name + " en mijn e-mailadres is " + email + ".";
console.log(msg);
// oude notatie: 'Mijn naam is' + name + ' en mijn e-mailadres is '+ email + '.';
// 5. Arrays kunnen op twee manieren worden genoteerd
var getallen = [10, 20, 30, 40]; // array van numbers
var namen = ['Peter', 'Sandra', 'Bob', 'Michiel']; // array van strings;
// Idem, maar dan met andere notatie
var meerGetallen = [50, 60, 70, 80]; // array van numbers
var meerNamen = ['Javan', 'Feline', 'Rico', 'Sasja']; // array van strings;
// 6. Any type
var vanAlles = 10;
vanAlles = 'Hello World'; // geldig
vanAlles = false; //geldig
vanAlles.toString(); // geldig, al is het niet zeker dat .toString() runtime ook bestaat!
// Any array
var randomVerzameling = [10, false, { name: 'Peter' }];
// 7. Void type
function logging(msg) {
    console.log("Logging: " + msg);
}
logging('Hello World');
