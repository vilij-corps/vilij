let set_accordion_content = function(title, subtitle) {
    let accordionContent = `
    <button class="accordion">${title}</button>
    <div class="panel">
    <p>${subtitle}</p>
    </div>

    <button class="accordion">${title}</button>
    <div class="panel">
    <p>${subtitle}</p>
    </div>

    <button class="accordion">${title}</button>
    <div class="panel">
    <p>${subtitle}</p>
    </div>
    `;
    return accordionContent
}

class Accordion extends HTMLElement {
  connectedCallback() {
    let title = this.attributes.title.value
    let subtitle = this.attributes.subtitle.value
    let content = set_accordion_content(title, subtitle);
    this.innerHTML = content;
  }
}

customElements.define("accordion-component", Accordion);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}