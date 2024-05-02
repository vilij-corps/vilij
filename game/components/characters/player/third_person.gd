'''
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
'''

extends CharacterBody2D

@onready var animated_sprite = $AnimatedSprite2D
@onready var all_interactions = []
@onready var interact_label_display = %InteractLabel
@onready var footsteps = %footsteps

const SPEED = 300.0

func _ready():
	update_interactions()

func _process(delta):
	pass

func _physics_process(delta):
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction = Input.get_axis("walk_left", "walk_right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)

	move_and_slide()
	update_animations(direction)
	update_footsteps(direction)
	
	if Input.is_action_just_pressed("interact"):
		execute_interaction()

func update_animations(direction):
	if direction == 0:
		animated_sprite.play("idle")
	elif direction == 1:
		animated_sprite.play("walk_right")	
	elif direction == -1:
		animated_sprite.play("walk_left")

# play starts at 0.0 and should not be called
# continuously
func update_footsteps(direction):
	if direction != 0 and not footsteps.is_playing():
		footsteps.play()
		# print("footsteps play")
	elif direction == 0 and footsteps.is_playing():
		footsteps.stop()
		# print("footsteps stop")

func get_current_position():
	var player_position = get_position()
	return player_position


func _on_interaction_area_area_entered(area):
	all_interactions.insert(0, area)
	update_interactions()


func _on_interaction_area_area_exited(area):
	all_interactions.erase(area)
	update_interactions()

func update_interactions():
	if all_interactions:
		interact_label_display.text = all_interactions[0].interact_label
	else:
		interact_label_display.text = ""

func execute_interaction():
	if all_interactions:
			var cur_interaction = all_interactions[0]
			match cur_interaction.interact_type:
				"show_dialogue" : print(cur_interaction.interact_value)
