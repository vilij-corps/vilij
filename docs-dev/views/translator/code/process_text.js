
var change_tense = function() {

}

var remove_contractions = function() {

}

var remove_stems = function() {

}

var run_spellcheck = function() {
    var dictionary = new Typo("en_US", false, false, { dictionaryPath: "./dictionary/spellcheck" });
    var is_spelled_correctly = dictionary.check("mispelled");
    console.log(is_spelled_correctly)
    var array_of_suggestions = dictionary.suggest("mispeling");
    console.log(array_of_suggestions)
}

var test_compromise = function(corpus) {
    
    let doc=nlp(corpus).compute('root');
    
    doc.contractions().expand()
    doc.text()

    let str = doc.verbs().normalize().text()
    console.log(str)

    let conj = doc.verbs().conjugate()
    console.log(conj)
    
    let strip = doc.possessives().strip()
    console.log(strip)

    doc.contractions().expand()

    let result = doc.json();
    console.log(result)


    let m = doc.match('. ~beby~', null, { fuzzy: 0.7 }) //enable fuzzy-match
    console.log("Fuzzy Search")
    console.log(m.text())
}

var test_rita = function(corpus) {

    // singularize
    let singular = RiTa.singularize("dogs"); // returns "dog"
    console.log(singular)

    const opts = {
        tense: RiTa.PRESENT,
        form: RiTa.INFINITIVE
    };

    let alli = RiTa.conjugate('swimming', opts);
    console.log(alli)

    // Pling stemming algorithm
    let s = RiTa.stem("cakes"); // returns -> cake
    console.log(s)

    let tokens = RiTa.tokenize(corpus);
    console.log(tokens)

    console.log(RiTa.isStopWord("the"))
    console.log(RiTa.isPunct("?"))
}

test_compromise('The 10 whispering baby was in a canoe in great danger near the prison where banana pancakes were served near the stream at the curve. This is a toe.')
test_rita('The 10 whispering baby was in a canoe in great danger near the prison where banana pancakes were served near the stream at the curve. This is a toe.')