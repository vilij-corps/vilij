'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

# https://www.youtube.com/watch?v=43BZsLZheA4

class_name ProgressTracker
extends Node2D

@export var scenarios = 0
@export var phrases = 0
@export var vocabulary = 0
@export var missions = 0
@export var learning_time = 0

var save_path = "user://progress.json"

func _process(delta):
	# To update hud
	# scenarios_lbl = str(scenarios)
	# phrases_lbl = str(phrases)
	# vocabulary_lbl = str(vocabulary)
	# missions_lbl = str(missions)
	# learning_time_lbl = str(learning_time)
	pass

func _update_scenarios():
	scenarios += 1

func _update_phrases():
	phrases += 1
	
func _update_vocabulary():
	vocabulary += 1
	
func _update_missions():
	missions += 1
	
func _update_learning_time():
	learning_time += 1

func _on_save_btn_pressed():
	save_progress()	

func _on_load_btn_pressed():
	load_progress()
	
func save_progress():
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
