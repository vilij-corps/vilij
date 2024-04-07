extends Control

var description : String = ""
var ingredients : Array = []
var directions : Array = []

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func load_recipe_file(load_path : String):
	if FileAccess.file_exists(load_path):
		print("file found")
		var file = FileAccess.open(load_path, FileAccess.READ)
		var recipe = JSON.parse_string(file.get_as_text())
		if recipe is Array:
			print("success reading file")
			description = recipe["description"]
			ingredients = recipe["ingredients"]
			directions = recipe["directions"]
			return recipe
		else:
			print("error reading file")
	else:
		print("file not found")
