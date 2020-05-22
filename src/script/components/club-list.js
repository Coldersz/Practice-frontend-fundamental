import "./club-item.js";

class ClubList extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
    }

    /**
     * @param {any} param
     * 
     * Fungsi set clubs digunakan untuk menetapkan properti this._clubs pada class ini. 
     * Nantinya properti tersebut akan digunakan pada fungsi render dalam membuat custom element <club-item>.
     * 
     */
    set clubs(param) {
        this._clubs = param;
        this.render();
    }

    /**
     * Di function render ini kita lakukan proses perulangan dengan menggunakan forEach pada this._clubs.
     * 
     * Pada setiap iterasinya kita akan mendapatkan individual club dan pada saat itu juga kita buat custom element <club-item>.
     * 
     * Pada tiap elemen <club-item> dibuat sebagai child dari element <club-list> ini. 
     */
    render() {
        this._shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this._clubs.forEach(param => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = param
            this._shadowDOM.appendChild(clubItemElement);
        })
        
    }
    
    /**
     * 
     * @param {any} message 
     * 
     * Function renderError() berfungsi untuk menangani ketika hasil pencarian
     * mengalami kegagalan atau tidak ditemukan.
     * 
     */
    renderError(message) {
        this._shadowDOM.innerHTML = "";
        this._shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("club-list", ClubList)