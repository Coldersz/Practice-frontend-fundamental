// #Note : 
// Dalam penamaan tag untuk custom element, nama tag harus 
// terdiri dari dua kata yang dipisahkan oleh dash (-).
// Jika tidak, pembuatan custom element tidak akan berhasil.
// Hal Ini diperlukan untuk memberi tahu browser perbedaan antara
// elemen asli HTML dan custom element


class ImageFigure extends HTMLElement {

	// #Note :
	// LifeCycle callbacks pada HTMLElement :
	// - connectedCallback() : Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML. ~~> tempat yg tepat untuk menjalankan konfigurasi awal seperti mendapatkan data atau mengatur atribut
	// - disconnectedCallback() : Akan terpanggil setiap kali elemen dikeluarkan (remove()) dari DOM. ~~> tempat yg tepat untuk membersihkan data yang masih disimpan pada elemen.
	// - attributeChangedCallback() : Akan terpanggil setiap kali nilai atribut yang di-observe melalui fungsi static get observedAttributes diubah. ~~> untuk memuat ulang data yang ditampilkan oleh elemen.
	// - adoptedCallback() : Akan terpanggil setiap kali elemen dipindahkan pada dokumen baru. ~~> jika kita memanfaatkan tag <iframe> maka callback ini akan terpanggil.


	constructor() {
		super();
		console.log('constructed!');
	}

	connectedCallback() {
		console.log('connected!');
	}

	disconnectedCallback() {
		console.log('disconnected!');
	}

	adoptedCallback() {
		console.log('adopted!');
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute: ${name} changed`);
	}

	static get observedAttributes() {
		return ['caption'];
	}
}

customElements.define("image-figure", ImageFigure);