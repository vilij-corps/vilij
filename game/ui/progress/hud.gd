'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''
class_name HuD
extends Node2D

@export var scenarios = 0
@export var vocabulary = 0
@export var learning_time = 0

@onready var scenarios_lbl = $scenarios_lbl
@onready var learning_time_lbl = $learning_time_lbl

var save_path = "user://progress.save"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# To update hud
	scenarios_lbl.text = str(scenarios)
	# vocabulary_lbl = str(vocabulary)
	# learning_time_lbl = str(learning_time)
	
	# Returns the amount of time passed in milliseconds since the engine started.
	var msec = Time.get_ticks_msec()
	var seconds = msec/1000 as int
	var minutes = seconds/60.00 as float
	var hours = minutes/60.00 as float
	_update_learning_time(roundf(hours))
	learning_time_lbl.text = str(learning_time)

func _update_scenarios():
	print("+1 scenarios")
	scenarios += 1
	
func _update_vocabulary():
	vocabulary += 1
	
func _update_learning_time(elapsed_time):
	learning_time += elapsed_time

func _on_save_btn_pressed():
	save_progress()	

func _on_load_btn_pressed():
	load_progress()
	
func save_progress():
	print("saving progress")
	var file = FileAccess.open(save_path, FileAccess.WRITE)
	file.store_var(scenarios)
	file.store_var(vocabulary)
	file.store_var(learning_time)
	file.close()
	
func load_progress():
	if FileAccess.file_exists(save_path):
		var file = FileAccess.open(save_path, FileAccess.READ)
		scenarios = file.get_var(scenarios)
		vocabulary = file.get_var(vocabulary)
		learning_time = file.get_var(learning_time)
	else:
		print("no data saved...")
		scenarios = 0
		vocabulary = 0
		learning_time = 0
