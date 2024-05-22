class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div>
                <p class="footer-text footer-attribution">This work is licensed under Attribution 4.0 International <strong>CC BY 4.0</strong></p>
                <p class="footer-text footer-attribution">Hand crafted with ♥ by the <strong>Vilij Corps</strong></p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);