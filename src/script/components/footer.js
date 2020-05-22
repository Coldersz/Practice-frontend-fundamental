class Footer extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar sticky-bottom navbar-light border" style="background-color: #f1f2f6;">
      <div class="text-muted mx-auto py-2">Developed by Achmad Dzulfian</div>
    </nav>
      `;
  }
}

customElements.define("footer-item", Footer)