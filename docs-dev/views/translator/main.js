
// Globals
var corpus = null;
var eng = null;
var english = null;
var element = null;


function run_translation() {

    let idx = index_dictionary();

    // let corpus = []

    let doc=nlp(english).compute('root')
    corpus = doc.json()

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

    english = document.getElementById("eng").value;
    eng = document.getElementById("eng");
    element = document.getElementById("translation");

    const run_btn = document.getElementById("run_btn");
    run_btn.addEventListener("click", function() { 
        run_translation()
    });

    run_translation()

})



