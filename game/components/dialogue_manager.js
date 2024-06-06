/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

// for global access to dialogue script
var current_dialogue = []
// how many lines there are in the script
var dialogue_lines = 0
// has the script reached the end
var dialogue_end = false
// which line is currently active
var dialogue_state = 0

// variable check to pause player movement
// during dialogue
var can_move = true

// load node table
function load_dialogue_file(df) {
	// Load graph data
	Papa.parse(df, {
	  download: true,
	  header: true,
	  complete: function(results) {
		  // console.log("Finished:", results.data);
		  let data = results
		  // console.log(JSON.stringify(data));
		  current_dialogue = data
		  data.forEach(function(d) {
			// console.log(d)
			let n = new Object();
			n.data = d;
			// console.log(n)
		  })
		  
		  // do something with data
		  return json_as_array
	  }
	});
}

function dialogue_manager() {
	dialogue_lines = current_dialogue.size()
	dialogue_end = dialogue_lines - 1
}

function dialogue_forward() {
	print(dialogue_state)
	dialogue_state += 1
	print(dialogue_state)
}

function dialogue_back() {
	print(dialogue_state)
	dialogue_state -= 1
	print(dialogue_state)
}