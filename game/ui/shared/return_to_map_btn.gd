'''
 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

extends Button

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	self.button_down.connect(return_to_map)

func return_to_map():
	print("Returning to Map")
	ProgressManager.update_scenarios()
	get_tree().change_scene_to_file("res://ui/maps/map_level_one.tscn")
