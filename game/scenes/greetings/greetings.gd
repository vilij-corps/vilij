
extends Node2D

@onready var learning_label = %learning_label
@onready var english_label = %english_label
@onready var voiceover = %voiceover

# Script
var array = [
	{"learning": "Wasuze otyano Nnyabo", "english": "Good morning Madam", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"},
	{"learning": "Wasuze otyano Ssebo", "english": "Good morning Sir", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"},
	{"learning": "Abeeka bali batya?", "english": "How is everyone at home?", "voiceover": "res://scenes/greetings/voiceovers/how-are-you-f.mp3"}
]

var dialogue_lines = null
var dialogue_end = null
var dialogue_state = 0

# Called when the node enters the scene tree for the first time.
func _ready():
	dialogue_manager(array)
	
	print(dialogue_lines)
	var i = dialogue_lines
	for d in i:
		print(array[d]["learning"])
		dialogue_state = d

	play_dialogue_line()


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func dialogue_manager(script):
	dialogue_lines = script.size()
	dialogue_end = dialogue_lines - 1

func dialogue_forward():
	dialogue_state += 1
	play_dialogue_line()
	
func dialogue_back():
	dialogue_state -= 1
	play_dialogue_line()

func play_dialogue_line():
	learning_label.text = array[dialogue_state]["learning"]
	english_label.text = array[dialogue_state]["english"]
	voiceover.stream = load(array[dialogue_state]["voiceover"])
	voiceover.play()
