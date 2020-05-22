// #Note : harus dijalankan lewat local-web-server
import {coffee, isCoffeeMakerReady} from './state.js';

const displayStock = stock => {
	const coffeeListElement = document.querySelector('#coffee-stock-list');
	for(const type in stock) {
		const coffeeItemElement = document.createElement('li');
		coffeeItemElement.innerText = `${type} : ${stock[type]}`;
		coffeeListElement.appendChild(coffeeItemElement);
	}
}

const coffeeOrder = (type, miligrams) => {
	return new Promise((resolve, reject) => {
		if (isCoffeeMakerReady) {
			if (coffee[type] >= miligrams) {
				resolve('Kopi berhasil dipesan');
			} else {
				reject('Maaf stok kopi habis');
			}
		} else {
			reject('Maaf mesin sedang rusak');
		}
	});
}

const coffeeOrderButton = async event => {
	const type = prompt('Kopi apa yang ingin anda pesan?');
	const miligrams = prompt('Berapa miligram?');
	try {
		const result = await coffeeOrder(type, miligrams);
		alert(result);
	} catch(error) {
		alert(error);
	}
}

const coffeeOrderButtonElement = document.querySelector('#coffee-order-button');
coffeeOrderButtonElement.addEventListener('click', coffeeOrderButton);

displayStock(coffee);