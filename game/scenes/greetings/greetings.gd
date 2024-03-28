'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Node2D

@onready var learning_label = %learning_label
@onready var english_label = %english_label
@onready var voiceover = %voiceover

# Script
var greetings_script = [
	{"learning": "Wasuze otyano Nnyabo", "english": "Good morning Madam", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"},
	{"learning": "Wasuze otyano Ssebo", "english": "Good morning Sir", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"},
	{"learning": "Abeeka bali batya?", "english": "How is everyone at home?", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"}
]

# Called when the node enters the scene tree for the first time.
func _ready():
	DialogueManager.dialogue_manager(greetings_script)
	DialogueManager.play_dialogue_line()

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func play_dialogue_line():
	learning_label.text = greetings_script[DialogueManager.dialogue_state]["learning"]
	english_label.text = greetings_script[DialogueManager.dialogue_state]["english"]
	voiceover.stream = load(greetings_script[DialogueManager.dialogue_state]["voiceover"])
	voiceover.play()

func replay_voiceover():
	voiceover.play()
