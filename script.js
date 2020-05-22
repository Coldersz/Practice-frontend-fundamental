const user = {
	firstName: "Achmad",
	lastName: "Dzulfian",
	age: 17
}
const admin = {
    name: "Jane",
    position: "Marketing"
}

// Code dibawah menggunakan cara manual
 
const message = "Dear, " + user.firstName + " " + user.lastName +  "\n\n" +
"Selamat ulang tahun yang ke-" + user.age + " semoga selalu diberikan kesehatan." + "\n\n" +
"Best Regards,\n" +
admin.name + "\n" +
admin.position;
 
console.log(message);


// Code dibawah menggunakan cara yg terdapat pada ES6, meskipun beda code, hasil nya sama

 
const message1 = `Dear, ${user.firstName} ${user.lastName}
 
Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.
 
Best Regards,
${admin.name}
${admin.position}`;

console.log(message1);
