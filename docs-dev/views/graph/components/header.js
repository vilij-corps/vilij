class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

        // this.appendChild(node);
    
        this.innerHTML = `
        <div class="header">
          <div class="topnav">
              <img src="./assets/logo/cc.svg" alt="Crested Crane" class="header-logo">
              <a class="active" href="#home">Home</a>
              <a href="#news">Search</a>
              <a href="#contact">About</a>
              <a href="#about">Contact</a>
          </div>
        </div>
      `;
    }
}
  
customElements.define('header-component', Header);