extends Control

@onready var learning_label : Label  = %learning_label
@onready var english_label : Label  = %english_label
@onready var voiceover : AudioStreamPlayer  = %voiceover

var dialogue_script = null

# for position placement
var character_speaking : String = "A"
# for position placement of speech bubble
var character_positions : Array = [Vector2(0, 50), Vector2(200, 50)]

func init_dialogue():
	dialogue_script = DialogueManager.current_dialogue
	
func play_dialogue_line():
	# set visibility
	dialogue_hide()
	
	# set position
	# var player_position = %Player.position
	character_speaking = dialogue_script[DialogueManager.dialogue_state]["character"]
	if character_speaking == "A":
		pass
	elif character_speaking == "B":
		dialogue_position(character_positions[0])
	
	# set labels
	
	learning_label.text = dialogue_script[DialogueManager.dialogue_state]["luganda"]
	english_label.text = dialogue_script[DialogueManager.dialogue_state]["english"]
	voiceover.stream = load(dialogue_script[DialogueManager.dialogue_state]["voiceover"])

	dialogue_show()
	Helpers.get_viewport_dims()
	
# play voiceover on click
func _on_play_voice_btn_pressed():
	voiceover.play()

# previous line in script
func _on_play_back_btn_pressed():
	DialogueManager.dialogue_back()
	play_dialogue_line()

# next line in script
func _on_play_fwd_btn_pressed():
	DialogueManager.dialogue_forward()
	character_speaking = "B"
	play_dialogue_line()

# where to place the dialogue bubble
func dialogue_position(pos):
	print("changing position")
	self.position = pos
	
# set visibility to show for
# character speaking
func dialogue_show():
	print("showing bubble")
	self.show()

# set visibility to hide for
# character not speaking
func dialogue_hide():
	print("hiding bubble")
	self.hide()
