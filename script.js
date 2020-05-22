// #Note : Tidak bisa dijalankan di browser, jalankan di cmd 'node script.js'

const {coffeeStock, isCoffeeMakerReady} = require('./state.js');
// #Note : ketika menggunakan destructruring object, pastikan nama variable sama dengan yg ada di module

console.log(coffeeStock);
console.log(isCoffeeMakerReady);