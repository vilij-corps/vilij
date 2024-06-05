

// handle words that don't have
// a pictogram file yet
function pictogram_exists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
}

// render results of translation to
// card view
var render_translation = function() {

    // clear canvas
    element.textContent = "";
    
    let card = ''

        // sentence loop
        for (let z = 0; z < corpus.length; z++) {

            let terms = corpus[z].terms

            // word loop
            for (let t = 0; t < terms.length; t++) {

                card = '<div class="card"><div class="container">'

                // Here's the pictogram check
                let check = pictogram_exists(terms[t].pictogram)
                let checked = null;
                // console.log(check)

                // If there is no pictogram add a placeholder
                if (check) {
                    checked = '<img src="' + terms[t].pictogram + '" style="height:48px;">'
                } else {
                    checked = '<h4 style="margin-top:36px;">-</h4>'
                }
                
                // Now add the source and translation terms
                if (terms[t].text != terms[t].translation) {
                        card += checked
                        card += '<h4><b>' + terms[t].text + '</b></h4><div class="src_word"></div><p>' + terms[t].translation + '</p></div></div>'
                } else {
                        card += '<h4><b>' + terms[t].text + '</b></h4><p></p></div></div>'
                }

                // the PoS result
                card += '<div class="badge">' + terms[t].chunk + '</div>';

                let card_word = document.createElement("div");
                card_word.innerHTML = card
                element.appendChild(card_word);

                // reset
                card = ''
            
            } // end word loop
            
        } // end sentence loop

}

var render_flashcards = function() {
    /*
    // card deck container
    <div class="grid"></div>

    // a single card, front and back
    <div class="grid-item">
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src="./assets/logo/crested-crane-logo.png" alt="Avatar" style="width:240px;height:240px;">
    </div>
    <div class="flip-card-back">
    <h3>John Doe</h3>
    <p>Architect & Engineer</p>
    <p>We love that guy</p>
    <button class="3d_model" data-file="avocado">View 3D Model</button>
    </div>
    </div>
    </div>
    </div>
    */
}