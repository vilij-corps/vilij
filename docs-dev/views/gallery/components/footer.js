class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="footer-menu">
              <div class="footer-section">
                <div class="badge footer-item">Arts & Entertainment</div>
                <div class="badge footer-item">Business & Economy</div>
                <div class="badge footer-item">Culture & Society</div>
              </div>
              <div class="footer-section" style="padding-left: 20px; padding-right: 20px;">
                <div class="badge footer-item">Health & Fitness</div>
                <div class="badge footer-item">Safety & Security</div>
                <div class="badge footer-item">Science & Technology</div>
              </div>
              <div class="footer-section">
                <div class="badge footer-item">Travel & Adventure</div>
                <div class="badge footer-item">Environment & Nature</div>
                <div class="badge footer-item">About Us</div>
              </div>
            </div>
            <div>
                <p class="footer-text footer-attribution">This work is licensed under Attribution 4.0 International <strong>CC BY 4.0</strong></p>
                <p class="footer-text footer-attribution">Hand crafted with ♥ by the <strong>Vilij Corps</strong></p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);