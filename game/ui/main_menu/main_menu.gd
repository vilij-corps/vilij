'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Control

@onready var start_btn = $menu/Start_Btn
@onready var options_btn = $menu/Options_Btn
@onready var progress_btn = $menu/Progress_Btn
@onready var exit_btn = $menu/Exit_Btn

# Called when the node enters the scene tree for the first time.
func _ready():
	start_btn.button_down.connect(start_pressed)
	options_btn.button_down.connect(options_pressed)
	progress_btn.button_down.connect(progress_pressed)
	exit_btn.button_down.connect(exit_pressed)

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func start_pressed():
	print("Start Pressed")
	ProgressManager.load_progress()
	get_tree().change_scene_to_file("res://ui/maps/map_level_one.tscn")

func options_pressed():
	print("Options Pressed")
	get_tree().change_scene_to_file("res://ui/resolution/sizing.tscn")
	
func progress_pressed():
	print("Progress Pressed")
	# get_tree().change_scene_to_file("res://ui/resolution/sizing.tscn")

func exit_pressed():
	print("Exit Pressed")
	ProgressManager.save_progress()
	get_tree().quit()
