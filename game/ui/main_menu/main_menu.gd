'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var start_btn = $Start_Btn
@onready var exit_btn = $Exit_Btn

# Called when the node enters the scene tree for the first time.
func _ready():
	start_btn.button_down.connect(start_pressed)
	exit_btn.button_down.connect(exit_pressed)

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func start_pressed():
	print("Start Pressed")
	ProgressManager.load_progress()
	get_tree().change_scene_to_file("res://ui/maps/map_level_one.tscn")

func exit_pressed():
	print("Exit Pressed")
	ProgressManager.save_progress()
	get_tree().quit()
