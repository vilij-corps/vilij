'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var lug = %lug
@onready var eng = %eng
@onready var bubble_container = %bubble
@onready var play_btn = %play_vocab_btn
@onready var vocab_voice = %vocab_voice

var bubble_visibility : bool = true

# Called when the node enters the scene tree for the first time.
func _ready():
	bubble_container.hide()
	play_btn.hide()
	bubble_visibility = false

func _on_show_bubble_pressed():
	if bubble_visibility == true:
		bubble_container.hide()
		play_btn.hide()
		bubble_visibility = false
	elif bubble_visibility == false:
		bubble_container.show()
		play_btn.show()
		bubble_visibility = true


func _on_play_vocab_btn_pressed():
	vocab_voice.play()
