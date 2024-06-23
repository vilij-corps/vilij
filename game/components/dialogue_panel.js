/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/


// add text to the UI
var populate_history = function() {
	
	var history = DM.current_dialogue
	
	let i = 0;
	const s = DM.dialogue_lines
	for (i; i < s; i++) {

		var row = VBoxContainer.new()
		var eng = Label.new()
		var lu = Label.new()
		lu.text = history[i]["luganda"]
		lu.add_theme_font_size_override("font_size", 36)
		eng.text = history[i]["english"]
		eng.add_theme_font_size_override("font_size", 24)
		row.add_child(lu)
		row.add_child(eng)
		history_list.add_child(row)

	}
}