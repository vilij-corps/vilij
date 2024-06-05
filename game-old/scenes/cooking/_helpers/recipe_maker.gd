extends Control

@onready var list : VBoxContainer = %list
@onready var steps : VBoxContainer = %steps

var description : String = ""
var ingredients : Array = []
var directions : Array = []

# load the json recipe file
func load_recipe_file(load_path : String):
	if FileAccess.file_exists(load_path):
		print("file found")
		var file = FileAccess.open(load_path, FileAccess.READ)
		var recipe = JSON.parse_string(file.get_as_text())
		if recipe is Dictionary:
			print("success reading file")
			parse_recipe(recipe)
			return recipe
		else:
			print("error reading file")
	else:
		print("file not found")

# parse the data by json structure
func parse_recipe(recipe):
	description = recipe["description"]
	ingredients = recipe["ingredients"]
	directions = recipe["directions"]
	print(description)
	print(ingredients[0])
	print(directions[1])
	populate_container()

# add text to the UI
func populate_container():
	for i in ingredients.size():
		var item = Label.new()
		item.text = ingredients[i]["english"]
		list.add_child(item)
		
		var step = Label.new()
		step.text = directions[i]["english"]
		steps.add_child(step)
		
