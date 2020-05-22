// ~~~~~~~~~~~~~~~~~~ Regular Function ~~~~~~~~~~~~~~~~~~ //

function sayHello(name = 'Strangers', greet = 'Hello') {
	console.log(`${greet} ${name}!`)
}

sayHello('Shun', 'Welcome');
sayHello();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// ~~~~~~~~~~~~~~~~~~~ Arrow Function ~~~~~~~~~~~~~~~~~~~ //

const sayHi = (name = 'Somebody', greet = 'Hi') => console.log(`${greet} ${name}!`)

sayHi('Takazaki', 'Welcome');
sayHi();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //