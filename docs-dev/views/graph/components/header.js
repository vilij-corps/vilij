class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {

        // this.appendChild(node);
    
        this.innerHTML = `
        <div class="header">
          <div style="float: left; vertical-align: middle;" >
              <img src="./assets/logo/vilijcorps.svg" alt="Vilij Corps" class="header-logo">
              <img src="./assets/logo/phionah.svg" alt="Vilij Corps" class="header-left-logo">
          </div>
          <div class="topnav">
              <img src="./assets/icons/home.svg" alt="Home" class="nav-logo">
              <img src="./assets/icons/gallery.svg" alt="Gallery" class="nav-logo">
              
              <img src="./assets/icons/translator_alt.svg" alt="Translator" class="nav-logo">
              <img src="./assets/icons/github.svg" alt="Github" class="nav-logo">
          </div>
        </div>
      `;
    }
}
  
customElements.define('header-component', Header);