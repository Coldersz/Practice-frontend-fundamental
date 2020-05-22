const executorFunction = (resolve, reject) => {
	const isCoffeeMakerReady = false;
	if (isCoffeeMakerReady) {
		resolve('Kopi berhasil dibuat');
	} else {
		reject('Mesin kopi tidak dapat digunakan!');
	}
}

const handlerSuccess = resolvedValue => {
	console.log(resolvedValue);
}

const handlerRejected = rejectionReason => {
	console.log(rejectionReason);
}

const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess).catch(handlerRejected);


// ~~~~~~~~~~~~~~~~~~~ Chaining Promise ~~~~~~~~~~~~~~~~~~~ //

const state = {
	isCoffeeMakerReady: true,
	seedStocks: {
		arabica: 250,
		robusta: 60,
		liberica: 80
	}
}

const getSeeds = (type, miligrams) => {
	return new Promise((resolve, reject) => {
		if (state.seedStocks[type] >= miligrams) {
			state.seedStocks[type] -= miligrams;
			resolve('Biji kopi didapatkan!');
		} else {
			reject('Maaf stock kopi habis');
		}
	});
}

const makeNewCoffee = seeds => {
	return new Promise((resolve, reject) => {
		if (state.isCoffeeMakerReady) {
			resolve('Kopi berhasil dibuat!');
		} else {
			reject('Maaf mesin tidak dapat digunakan');
		}
	});
}

const servingToTable = coffee => {
	return new Promise(resolve => {
		resolve('Pesanan kopi sudah selesai!');
	});
}

function reserveACoffee(type, miligrams) {
	getSeeds(type, miligrams)
	.then(makeNewCoffee)
	.then(servingToTable)
	.then(resolvedValue => {
		console.log(resolvedValue);
	})
	.catch(rejectedReason => {
		console.log(rejectedReason);
	})
}

async function reserveCoffee(type, miligrams) {
	try {
		const seeds = await getSeeds(type, miligrams);
		const make = await makeNewCoffee(seeds);
		const result = await servingToTable(make);
		console.log(result);
	} catch(error) {
		console.error(error)
	}
}

reserveACoffee('liberica', 80);
reserveCoffee('arabica', 250);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// ~~~~~~~~~~~~~~~~~~~~~~~ Promise All ~~~~~~~~~~~~~~~~~~~~~~~ //

const arabicaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('Kopi arabika selesai!');
		}, 4000);
	});
}

const robustaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('Kopi robusta selesai!');
		}, 2000);
	});
}

const libericaOrder = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('Kopi robusta selesai!');
		}, 3000);
	});
}

const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

// #Note : 
// Promise.all() akan mengembalikan nilai 
// ketika seluruh proses promise didalamnya selesai dijalankan
Promise.all(promises)
.then(resolve => {
	console.log(resolve);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //