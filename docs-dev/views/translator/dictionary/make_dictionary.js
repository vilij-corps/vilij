Papa.parse("./dictionary/dict.csv", {
    download: true,
    header: true,
    complete: function(results) {
        // console.log("Finished:", results.data);
        let data = results.data
        // console.log(JSON.stringify(data));
        data.forEach(function(d) {
            // let str = doc.match('#Possessive #Noun').text()
            // console.log(str)
            d.en_stem = porter(d.English)
        })
        // console.log(JSON.stringify(data));
    }
});