extends Node

func return_to_map():
	print("Returning to Map")
	get_tree().change_scene_to_file("res://scenes/airport_scene.tscn")
