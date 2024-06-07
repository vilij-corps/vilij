/*
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

// main progress database for scores
// a simple key value object
var PROGRESS_DB = new Object();

class ProgressManager {
	constructor() {
		this.progress_db_key = "pdb";
		this.progress_db = new Object();
		// Completion of all dialogs
		// Completion of all vocabularies
		this.progress_db.scenarios = 0;
		// Itemized count
		this.progress_db.scenario_tally = 0;
		// Object clicks
		this.progress_db.vocabulary = 0;
		// Count / Weight of repeats
		this.progress_db.experience = 0;
		// Aggregate time playing game
		this.progress_db.learning_time = 0;
		// Need a smart formula for this
		this.progress_db.proficiency_level = 1;
	}

	get_scenarios_score() {
		return this.progress_db.scenarios;
	}

	set_scenarios_score() {
		console.log(this.progress_db)
		this.progress_db.scenarios += 1;
		console.log(this.progress_db)
	}

	get_vocabulary_score() {
		return this.progress_db.vocabulary;
	}

	set_vocabulary_score() {
		console.log("+1 vocabulary")
		this.progress_db.vocabulary += 1;
		console.log(this.progress_db.vocabulary)
	}

	// saves all progress measures as an object
	// in a local storage key
	save_progress() {
		localStorage.setItem(progress_db_key, JSON.stringify(this.progress_db));
	}

	// if a progress database is found load and update hud
	load_progress() {

		if (localStorage.getItem(progress_db_key)) {
			console.log("progress exists...")
			const pdb = JSON.parse(localStorage.getItem(progress_db_key))
			console.log(pdb)
			this.progress_db = pdb;
		}
		else {
			console.log("no data saved...");
		}
	
	}

	download_progress(data, filename) {
		// Convert the JSON data to a string
		var json = JSON.stringify(data);
	
		// Create a new Blob object with the JSON data and set its type
		var blob = new Blob([json], { type: 'application/json' });
	
		// Create a temporary URL for the file
		var url = URL.createObjectURL(blob);
	
		// Create a new link element with the download attribute set to the desired filename
		var link = document.createElement('a');
		link.setAttribute('download', filename);
	
		// Set the link's href attribute to the temporary URL
		link.href = url;
	
		// Simulate a click on the link to trigger the download
		document.body.appendChild(link);
		link.click();
	
		// Clean up the temporary URL and link element
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	
	  }

	// to enable transport of progress data
	// when changing devices
	// a simple json file
	// const save_btn = document.getElementById('save_btn');
	// save_btn.addEventListener('click', function(){
	//    save_progress_file();
	// });
	save_progress_file() {
		download_progress(this.progress_db, 'my_progress_db')
	}

	// user / ui triggered action to
	// load a saved progress json file
	load_progress_file() {
	
	}
}

let pm = new ProgressManager()
pm.set_scenarios_score()