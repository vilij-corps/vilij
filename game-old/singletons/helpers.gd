'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Node

func get_viewport_dims():
	# size of game window
	print(get_viewport().size)
	# scaled size of game window
	print(get_viewport().content_scale_size)
	# size of screen resolution
	print(DisplayServer.screen_get_size())
	
	# DisplayServer.window_set_size(DisplayServer.screen_get_size())
