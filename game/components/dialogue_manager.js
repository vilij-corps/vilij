/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

class DialogueManager {
	constructor() {
		// for global access to dialogue script
		this.current_dialogue = [];
		// how many lines there are in the script
		this.dialogue_lines = 0;
		// has the script reached the end
		this.dialogue_end = false;
		// which line is currently active
		this.dialogue_state = 0;

		// variable check to pause player movement
		// during dialogue
		this.can_move = true;

	}

	load_dialogue_db() {
		// Load graph data
		Papa.parse("./data/dialogues.csv", {
			download: true,
			header: true,
			complete: function(results) {
				console.log("Dialogue Database Loaded");
				DIALOGUES = results.data
			}
		  });
	}

	query_dialogue_db(c) {
		// console.log(DIALOGUES)
		const result = DIALOGUES.filter(d => d.CATEGORY === c);
		console.log(JSON.stringify(result))
	}

	dialogue_forward() {
		console.log(this.dialogue_state)
		this.dialogue_state += 1
		console.log(this.dialogue_state)
	}
	
	dialogue_back() {
		console.log(this.dialogue_state)
		this.dialogue_state -= 1
		console.log(this.dialogue_state)
	}
}


