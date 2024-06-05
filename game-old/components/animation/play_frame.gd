extends Node


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

# Given a spritesheet of frames
# you can specify which one to play
func play_anim_frame(frame_array):
	# e.g., [4,130] as list to choose from
	var frame_to_play = frame_array[randi() % frame_array.size()]
	print(frame_to_play)
	# $AnimatedSprite3D.frame = frame_to_play

