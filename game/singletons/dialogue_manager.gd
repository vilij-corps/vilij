'''
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Node

# for global access to dialogue script
var current_dialogue : Array = []
# how many lines there are in the script
var dialogue_lines = 0
# has the script reached the end
var dialogue_end = false
# which line is currently active
var dialogue_state = 0


func load_dialogue_file(load_path : String):
	if FileAccess.file_exists(load_path):
		print("file found")
		var file = FileAccess.open(load_path, FileAccess.READ)
		var json_as_array = JSON.parse_string(file.get_as_text())
		if json_as_array is Array:
			print("success reading file")
			current_dialogue = json_as_array
			return json_as_array
		else:
			print("error reading file")
	else:
		print("file not found")

func dialogue_manager():
	dialogue_lines = current_dialogue.size()
	dialogue_end = dialogue_lines - 1

func dialogue_forward():
	print(dialogue_state)
	dialogue_state += 1
	print(dialogue_state)
	
func dialogue_back():
	print(dialogue_state)
	dialogue_state -= 1
	print(dialogue_state)
