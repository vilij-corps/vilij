var index_dictionary = function() {

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