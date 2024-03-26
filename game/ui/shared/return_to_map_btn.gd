extends Button

var hud = HuD.new()

# Called when the node enters the scene tree for the first time.
func _ready():
	hud_scenario.load_progress()


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	self.button_down.connect(return_to_map)


func return_to_map():
	print("Returning to Map")
	hud.update_scenarios()
	hud.save_progress()
	get_tree().change_scene_to_file("res://ui/maps/map_level_one.tscn")
