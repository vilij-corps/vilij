'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var history_list : VBoxContainer = %HistoryList

# add text to the UI
func populate_history():
	var history = DialogueManager.current_dialogue
	for i in history.size():
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
