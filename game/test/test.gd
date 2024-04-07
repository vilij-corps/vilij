extends Node2D


# Called when the node enters the scene tree for the first time.
func _ready():
	var data = DialogueManager.load_dialogue_file("res://test/test_data.json")
	print(data)
	for n in data.size():
		var row = data[n]
		var learning = row["learning"]
		print(learning)
		var english = row["english"]
		print(english)
