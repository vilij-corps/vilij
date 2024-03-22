extends CharacterBody2D

@onready var animated_sprite = $AnimatedSprite2D

# CAPITAL CASE for variables
const SPEED = 300.0
const JUMP_VELOCITY = -400.0

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")


func _physics_process(delta):
	
	# Add the gravity to fall.
	if not is_on_floor():
		velocity.y += gravity * delta

	# Handle Jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# Valyes are -1 or 1
	var direction = Input.get_axis("walk_left", "walk_right")
	
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		
	move_and_slide()
	update_animations(direction)

func update_animations(direction):
	
	# Stay looking left at idle until change of direction
	if direction != 0:
		animated_sprite.flip_h = (direction == -1)
		
	if is_on_floor():
		if direction == 0:
			animated_sprite.play("idle")
		else:
			animated_sprite.play("run")	
