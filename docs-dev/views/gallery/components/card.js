
let set_card_content = function(img, title, subtitle) {
    let cardContent = `
    <div class="card">
        <img src="${img}" alt="${title}" class="center card-img">
        <hr class="card-divider">
        <div class="card-container">
            <h4 class="card-title">${title}</h4>
            <p class="card-subtitle">${subtitle}</p>
        </div>
    </div>
    `;
    return cardContent
}

class Card extends HTMLElement {
  connectedCallback() {
    let img = this.attributes.img.value
    let title = this.attributes.title.value
    let subtitle = this.attributes.subtitle.value
    let content = set_card_content(img, title, subtitle);
    this.innerHTML = content;
  }
}

customElements.define("card-component", Card);
