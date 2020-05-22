class Navbar extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="p-1">
        <a class="navbar-brand title-nav" href="#">Kawal Corona</a>
      </div>
    </nav>
      `;
  }
}

customElements.define("navbar-item", Navbar)