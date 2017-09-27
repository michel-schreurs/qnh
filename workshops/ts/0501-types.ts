// 0501-types.ts
export {}; // om errors ("cannot redeclare block-scoped variabele...") bij gebruik van dezelfde variabelenaam elders in de downloads te voorkomen. Normaal gesproken is deze regel niet nodig.

// 1. Gegevenstype boolean
let isCustomer: boolean = true;
let hasEmail: boolean   = false;

//hasEmail = 'Yes'; // error TS2322: Type '"Yes"' is not assignable to type 'boolean'.

// 2. Gegevenstype number
let decimal: number       = 10;
let floatingPoint: number = 5.95;
let hex: number           = 0xAA99CC;
let binary: number        = 0b00110010;
let octal: number         = 0o0767;

// 3. Gegevenstype string
let name: string  = 'Peter';
let email: string = 'info@kassenaar.com';
name              = 'Sandra'; // geldig

// 4. Template literals, of template strings
let msg = `Mijn naam is ${name} en mijn e-mailadres is ${email}.`;
console.log(msg);
// oude notatie: 'Mijn naam is' + name + ' en mijn e-mailadres is '+ email + '.';

// 5. Arrays kunnen op twee manieren worden genoteerd
let getallen: number[] = [10, 20, 30, 40];	// array van numbers
let namen: string[]    = ['Peter', 'Sandra', 'Bob', 'Michiel']; // array van strings;

// Idem, maar dan met andere notatie
let meerGetallen: Array<number> = [50, 60, 70, 80];	// array van numbers
let meerNamen: Array<string>    = ['Javan', 'Feline', 'Rico', 'Sasja']; // array van strings;


// 6. Any type
let vanAlles: any = 10;
vanAlles          = 'Hello World'; // geldig
vanAlles          = false; //geldig
vanAlles.toString(); // geldig, al is het niet zeker dat .toString() runtime ook bestaat!

// Any array
let randomVerzameling: any[] = [10, false, {name: 'Peter'}];

// 7. Void type
function logging(msg: string): void {
	console.log(`Logging: ${msg}`);
}
logging('Hello World');