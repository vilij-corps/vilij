'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Button

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	self.button_down.connect(return_to_main)

func return_to_main():
	print("Returning to Main")
	get_tree().change_scene_to_file("res://ui/main_menu/main_menu.tscn")
