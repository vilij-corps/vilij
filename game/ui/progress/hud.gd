'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Node2D

@onready var scenarios_lbl = $scenarios_lbl
@onready var learning_time_lbl = $learning_time_lbl

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# To update hud
	scenarios_lbl.text = str(ProgressTracker.scenarios)
	# vocabulary_lbl = str(vocabulary)
	
	# Returns the amount of time passed in milliseconds since the engine started.
	var msec = Time.get_ticks_msec()
	var seconds = msec/1000 as int
	var minutes = seconds/60.00 as float
	var hours = minutes/60.00 as float
	ProgressTracker.update_learning_time(hours)
	learning_time_lbl.text = str(ProgressTracker.learning_time)
