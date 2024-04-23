'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Node2D

@onready var scenarios_lbl = $scenarios_lbl
@onready var vocabulary_lbl = $vocabulary_lbl
@onready var experience_lbl = $experience_lbl
@onready var learning_time_lbl = $learning_time_lbl

@onready var level_one = $level_one
@onready var level_two = $level_two
@onready var level_three = $level_three
@onready var level_four = $level_four
@onready var level_five = $level_five

# Called when the node enters the scene tree for the first time.
func _ready():
	level_one.hide()
	level_two.hide()
	level_three.hide()
	level_four.hide()
	level_five.hide()

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# To update hud
	scenarios_lbl.text = str(ProgressManager.scenarios)
	vocabulary_lbl.text = str(ProgressManager.vocabulary)
	experience_lbl.text = str(ProgressManager.experience)
	
	# Returns the amount of time passed in milliseconds since the engine started.
	var msec = Time.get_ticks_msec()
	var seconds = msec/1000 as int
	var minutes = seconds/60.00 as float
	var hours = minutes/60.00 as float
	ProgressManager.update_learning_time(hours)
	learning_time_lbl.text = str(snapped(ProgressManager.learning_time,0.01))
	
	if ProgressManager.proficiency_level == 1:
		level_one.show()
		level_two.hide()
		level_three.hide()
		level_four.hide()
		level_five.hide()
	elif ProgressManager.proficiency_level == 2:
		level_one.hide()
		level_two.show()
		level_three.hide()
		level_four.hide()
		level_five.hide()
	elif ProgressManager.proficiency_level == 3:
		level_one.hide()
		level_two.hide()
		level_three.show()
		level_four.hide()
		level_five.hide()
	elif ProgressManager.proficiency_level == 4:
		level_one.hide()
		level_two.hide()
		level_three.hide()
		level_four.show()
		level_five.hide()
	elif ProgressManager.proficiency_level == 5:
		level_one.hide()
		level_two.hide()
		level_three.hide()
		level_four.hide()
		level_five.show()
	elif ProgressManager.proficiency_level == 6:
		level_one.hide()
		level_two.hide()
		level_three.hide()
		level_four.hide()
		level_five.hide()
