
// Globals
// search index
// created from index_dictionary()
var idx = null;
// result of NLP processing
var corpus = null;

var eng = null;
var english = null;
var element = null;

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

    let el = document.getElementById('el')
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

                if (check) {
                    checked = '<img src="' + terms[t].pictogram + '" style="height:48px;">'
                } else {
                    checked = '<h4 style="margin-top:36px;">-</h4>'
                }
                
                if (terms[t].text != terms[t].translation) {
                        card += checked
                        card += '<h4><b>' + terms[t].text + '</b></h4><div class="src_word"></div><p>' + terms[t].translation + '</p></div></div>'
                } else {
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

// full-text search
function index_dictionary() {

    // index needs an id
    for(let a = 0; a < dic.length; a++) {
        dic[a].id = a
    }

    let index = new MiniSearch({
        fields: ['English'], // fields to index for full-text search
        storeFields: ['English', 'Luganda'] // fields to return with search results
    })

    // Index all documents
    index.addAll(dic)

    return index;
    
}

function run_nlp() {
    let doc=nlp(english).compute('root')
    corpus = doc.json()
}


function run_translation() {

    run_nlp();

    /*
    [
        {   text: 'This is sentence one', 
            terms: [ 
                { chunk: 'Verb', root: 'whisper', tags: ['Gerund', 'Verb', 'PresentTense'], text: 'This', translation: ['first match', 'second match', '...']  }, 
                {...}, 
                {...} 
            ] 
        },
        { }
    ]

    */

    for (let i = 0; i < corpus.length; i++) {
        
        // sentence / phrase matching
        let sentences = corpus[i].text

        // word matching
        let words = corpus[i].terms;
        // Iterate over tokenized words
        for (let j = 0; j < words.length; j++) {
            
            let entry = words[j];
            let the_word = words[j].text;
            let chunk = words[j].chunk;
            let root = words[j].root;
            let tag = words[j].tags[2];
            let pictogram = '';

            let first_letter = the_word.charAt(0);
            // console.log(first_letter)
            if (root) {
                pictogram = "./assets/pictograms/" + first_letter + "/" + root + ".svg";          
            } else {
                pictogram = "./assets/pictograms/" + first_letter + "/" + the_word + ".svg"; 
            }

            // Check if number
            if (tag != 'NumericValue') {
                
                // search the index
                let results = idx.search(the_word)
                
                if (results[0]) {
                    
                    entry.translation = results[0].Luganda
                    entry.score = results[0].score

                    entry.pictogram = pictogram;

                } else {
                    entry.translation = the_word;
                }

            } else {
                entry.translation = the_word;
            } // end number check
        }
    }
    console.log(corpus)
    render_translation(corpus)
}

window.addEventListener('DOMContentLoaded',function () {

    // index the dictionary
    // to search
    idx = index_dictionary();

    // ui components
    eng = document.getElementById("eng");
    english = eng.value;
    element = document.getElementById("translation");

    // event to run translation
    const run_btn = document.getElementById("run_btn");
    run_btn.addEventListener("click", function() { 
        run_translation()
    });
    
    // initial run with default text
    run_translation()

})



