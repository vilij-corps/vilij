'''
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Node2D

# Dialogue Script
var greetings_script = "res://scenes/greetings/greetings.json"

var char_pos_one : Vector2 = Vector2(0,0)
var char_pos_two : Vector2 = Vector2(0,0)

func _ready():
	DialogueManager.load_dialogue_file(greetings_script)
	DialogueManager.dialogue_manager()
	$SpeechBubble.init_dialogue()
	$SpeechBubble.play_dialogue_line()
	$History.populate_history()

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

