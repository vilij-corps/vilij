

function imageExists(image_url){

    var http = new XMLHttpRequest();

    try {
        http.open('HEAD', image_url, false);
        http.send();
    }
    
    catch(err) {
        console.log('error');
    }

    return http.status != 404;

}

var render_translation = function() {

    let el = document.getElementById('el')
    let card = ''

        // sentence loop
        for (let z = 0; z < corpus.length; z++) {

            let terms = corpus[z].terms

            // word loop
            for (let t = 0; t < terms.length; t++) {

                card = '<div class="card"><div class="container">'

                let check = imageExists(terms[t].pictogram)
                // console.log(check)

                if (check) {

                    if (terms[t].text != terms[t].translation) {

                        card += '<img src="' + terms[t].pictogram + '" style="height:48px;">'
                        card += '<h4><b>' + terms[t].text + '</b></h4><div class="src_word"></div><p>' + terms[t].translation + '</p></div></div>'
    
                    } else {
    
                        card += '<h4><b>' + terms[t].text + '</b></h4><p></p></div></div>'
    
                    }

                } else {

                    card += '<h4 style="margin-top:40px;">-</h4>'
                    card += '<h4><b>' + terms[t].text + '</b></h4><p></p></div></div>'
                }

                card += '<div class="badge">' + terms[t].chunk + '</div>';

                let card_word = document.createElement("div");
                card_word.innerHTML = card
                el.appendChild(card_word);

                // reset
                card = ''
            
            } // end word loop
            
        } // end sentence loop

}