extends Node


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# Returns the amount of time passed in milliseconds since the engine started.
	var msec = Time.get_ticks_msec()
	var seconds = msec/1000
	var minutes = seconds/60
	var hours = minutes/60
	# learning_time = learning_time += hours
