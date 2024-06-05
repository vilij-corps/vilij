'''
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends Node2D

var chapati_file : String = "res://scenes/cooking/chapati/chapati.json"

# Called when the node enters the scene tree for the first time.
func _ready():
	$CanvasLayer/RecipeMaker.load_recipe_file(chapati_file)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
