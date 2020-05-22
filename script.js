const profile = {
	firstName: "Shun",
	lastName: "Takazaki",
	age: 17
}

const {firstName, lastName, age} = profile;

console.log(firstName, lastName, age);

/* output:
Shun Takazaki 17
*/


// ~~~~~~~~ Default Values ~~~~~~~~ //
const user = {
	first: "Takiya",
	last: "Kanebuchi",
	YO: 20
}

const {first, last, YO, isMale = true} = user;

console.log(`Nama : ${first} ${last}, Umur : ${YO}, Apakah anda lelaki? ${isMale}`)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


// ~~~~~~~~ Assigning to Different Local Variable Names ~~~~~~~~ //
const client = {
	first: "John",
	last: "Doe",
	age: 16
}

const {first: localFirst, last: localLast, age: localAge} = client;

console.log(`Ini nama depan ${localFirst}, ini nama belakang ${localLast}, ini umur ${localAge}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //