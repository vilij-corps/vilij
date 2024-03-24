'''

 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+

'''

extends Control

@onready var airport_btn = $Airport_Btn

# Called when the node enters the scene tree for the first time.
func _ready():
	airport_btn.button_down.connect(airport_pressed)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func airport_pressed():
	print("airport Pressed")
	get_tree().change_scene_to_file("res://scenes/airport.tscn")
