extends Control

@onready var history_list : VBoxContainer = %HistoryList

# Called when the node enters the scene tree for the first time.
func _ready():
	# populate_history()
	pass


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


# add text to the UI
func populate_history():
	var history = DialogueManager.current_dialogue
	for i in history.size():
		var row = VBoxContainer.new()
		var eng = Label.new()
		var lu = Label.new()
		lu.text = history[i]["luganda"]
		eng.text = history[i]["english"]
		row.add_child(lu)
		row.add_child(eng)
		history_list.add_child(row)
