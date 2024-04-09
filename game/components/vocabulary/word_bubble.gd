'''
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var lug = %lug
@onready var eng = %eng

var bubble_visibility : bool = true

# Called when the node enters the scene tree for the first time.
func _ready():
	%bubble.hide()
	bubble_visibility = false


func _on_show_bubble_pressed():
	if bubble_visibility == true:
		%bubble.hide()
		bubble_visibility = false
	elif bubble_visibility == false:
		%bubble.show()
		bubble_visibility = true
