
let set_blockquote_content = function(quote, author, source) {
    let cardContent = `
    <figure class="quote">
        <blockquote>${quote}...</blockquote>
        <figcaption>
            &mdash; ${author}, <cite>${source}</cite>
        </figcaption>
    </figure>
    `;
    return cardContent
}

class Blockquote extends HTMLElement {
  connectedCallback() {
    let quote = this.attributes.quote.value
    let author = this.attributes.author.value
    let source = this.attributes.source.value
    let content = set_blockquote_content(quote, author, source);
    this.innerHTML = content;
  }
}

customElements.define("blockquote-component", Blockquote);
