'''

 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+

'''

extends Node

# SIGNALS & EMITTERS for PROGRESS TRACKING
@onready var scenarios = 0
@onready var phrases = 0
@onready var vocabulary = 0
@onready var missions = 0
@onready var learning_time = 0

signal increase_scenario_progress()
func emit_increase_scenario_progress() -> void:
	increase_scenario_progress.emit()
	
	
