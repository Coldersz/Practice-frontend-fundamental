class ClubItem extends HTMLElement {

    constructor() {
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
    }
    
    /**
     * @param {any} param
     * 
     * Fungsi setter club berfungsi untuk menetapkan nilai club ke properti this._club
     * yang nantinya akan digunakan pada fungsi render untuk menampilkan data individual club hasil pencarian. 
     * 
     */
    set club(param) {
        this._club = param;
        this.render();
    }
    
    render() {
        this._shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                margin-bottom: 50px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                display: block;
            }
            
            .fan-art-club {
                width: 30%;
                object-position: center;
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
            
            .club-info {
                padding: 24px;
            }
            
            .club-info > h2 {
                font-weight: lighter;
            }
            
            .club-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        <img class="fan-art-club" src=" ${this._club.strTeamBadge} " alt="Fan Art">
        <div class="club-info">
            <h2>${this._club.strTeam}</h2>
            <p>${this._club.strDescriptionEN}</p>
        </div>
        `;
    }
}

customElements.define("club-item", ClubItem)