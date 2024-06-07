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

	load_dialogue_file(dialogue_file) {
		// Load graph data
		Papa.parse(dialogue_file, {
		  download: true,
		  header: true,
		  complete: function(dialogue) {
			// console.log("Dialogue Loaded"results);
			// console.log(results);
			this.current_dialogue = dialogue;
			this.dialogue_lines = this.current_dialogue.size()
			this.dialogue_end = this.dialogue_lines - 1
			// ready to render in speech bubble and panel
		  }
		});
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