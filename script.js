
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [first, second, third, fourth] = favorites;
// #Note :
// Nama dari variabel lokal bisa apa saja.
// Yang terpenting adalah urutan ketika deklarasi variabelnya saja

console.log(`Makanan pertama: ${first}, Makanan kedua: ${second}, Makanan pertama: ${third}, Makanan keempat: ${fourth}`)


// ~~~~~~ Destructuring Assignment ~~~~~~ //
const foods = ['Seafood', 'Salad', 'Nugget', 'Soup'];

let myFood = 'Ice Cream';
let herFood = 'Noodles';

[myFood, herFood] = foods;

console.log(`Ini makanan ku: ${myFood}, ini makanan dia: ${herFood}`)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// ~~~~~~ Destructuring Assignment Example ~~~~~~ //
let a = 1;
let b = 2;

console.log(`Sebelum swap:
	a = ${a}
	b = ${b}`);

[a, b] = [b, a];

console.log(`Setelah swap:
	a = ${a}
	b = ${b}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// ~~~~~~ Default Values ~~~~~~ //
let yourLegs = ['Right', 'Left'];

const [one, two, three = 'center'] = yourLegs;

console.log(`
	Kaki ku yang pertama: ${one}
	Kaki ku yang kedua: ${two}
	Kaki ku yang ketiga: ${three}
	`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //