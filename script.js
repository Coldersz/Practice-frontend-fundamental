// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Spread Operator ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

console.log('Tanpa spread Operator : ', favorites);
console.log('Menggunakan spread Operator : ', ...favorites);
console.log('Menggunakan cara manual : ', favorites[0], favorites[1], favorites[2], favorites[3]);
console.log(`Menggunakan backticks :  ${favorites}`);
for (let i = 0; i < favorites.length; i++) {
	console.log('Menggunakan for : ', favorites[i])
}
// #Note : Perbedaan terlihat pada output nya


const numbers = [12, 32, 90, 12, 32];

console.log(Math.max(...numbers));
// #Note : Spread operator cocok untuk digunakan sebagai nilai parameter pada variadic functions


const others = ['Cake', 'Pie', 'Donut'];
const getAll = [...favorites, ...others];

console.log('Menggabungkan dua array menggunakan spread operator : ', getAll);
// #Note : Spread operator dapat juga digunakan untuk menggabungkan array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Rest Parameter ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// #Note : Rest parameter juga dituliskan dengan '...'
function sum(...counts) {
	let result = 0;
	for(let count of counts) {
		result += count
	}
	return result;
}
console.log('Menggunakan Rest Parameter = ', sum(1, 2, 3, 4, 5));

const refrigerator = ['Samsung', 50, 2, 'milk', 'cheese', 'egg', 'butter'];
const [manufacture, weight, door, ...items] = refrigerator;

console.log(`Ini index pertama array refrigerator = ${manufacture}`);
console.log(`Ini index kedua array refrigerator = ${weight}`);
console.log(`Ini index ketiga array refrigerator = ${door}`);
console.log('Ini sisa nilai dari array refrigerator = ', items);
// #Note : variabel items mengambil semua sisa nilai dari array refrigerator

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //