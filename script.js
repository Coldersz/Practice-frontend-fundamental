
function People(name, age, hobby) {
	this.name = name;
	this.age = age;
	this.hobby = hobby;
}

const programmer = new People('John', 18, ['Coding', 'Reading', 'Gaming']);

console.log(`Nama: ${programmer.name}, Umur: ${programmer.age}, Hobby: ${programmer.hobby}`)

// #Note :
// Objek yg dibuat menggunakan function dengan keyword 'new'
// Sama halnya seperti membuat objek menggunakan objek literals '{}'

const developer = {
	name: 'Azin',
	age: 20,
	hobby: ['Coding', 'Reading', 'Gaming']
}

console.log(`Nama: ${developer.name}, Umur: ${developer.age}, Hobby: ${developer.hobby}`)



// ~~~~~~~~~~~~~~~~ Perbedaan regular dan arrow function dalam keyword 'this' ~~~~~~~~~~~~~~~~ //

// Menambahkan introMyself ke People
People.prototype.introMyself = function() {
	setTimeout(function() {
		console.log(`Ini pake Regular function :
			Hello! Nama saya ${this.name}, umur saya ${this.age}
			Hobi saya adalah ${this.hobby}`)
	}, 1000)
};

People.prototype.introduce = function() {
	setTimeout(() => {
		console.log(`Ini pake Arrow function :
			Hello! Nama saya ${this.name}, umur saya ${this.age}
			Hobi saya adalah ${this.hobby}`)
	}, 2000)
};

programmer.introMyself();
programmer.introduce();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //