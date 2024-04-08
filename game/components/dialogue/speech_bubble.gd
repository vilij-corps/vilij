extends Node2D

@onready var character_speaking : String = ""
@onready var learning_label : Label  = %learning_label
@onready var english_label : Label  = %english_label
@onready var voiceover : AudioStreamPlayer  = %voiceover

var dialogue_script = null

func init_dialogue():
	dialogue_script = DialogueManager.current_dialogue
	
func play_dialogue_line():
	# set visibility
	self.hide()
	# set position
	# var player_position = %Player.position
	self.position = Vector2(500, 50)
	# self.position = player_position
	# set labels
	character_speaking = dialogue_script[DialogueManager.dialogue_state]["character"]
	learning_label.text = dialogue_script[DialogueManager.dialogue_state]["luganda"]
	english_label.text = dialogue_script[DialogueManager.dialogue_state]["english"]
	voiceover.stream = load(dialogue_script[DialogueManager.dialogue_state]["voiceover"])

	self.show()
	

func _on_play_voice_btn_pressed():
	voiceover.play()

func _on_play_back_btn_pressed():
	DialogueManager.dialogue_back()
	play_dialogue_line()


func _on_play_fwd_btn_pressed():
	DialogueManager.dialogue_forward()
	play_dialogue_line()
