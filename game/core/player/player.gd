'''

 +-+-+ +-+-+ +-+-+-+
	 |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+

'''

extends CharacterBody2D

@onready var animated_sprite = $AnimatedSprite2D

const SPEED = 300.0

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

func update_animations(direction) -> void:
	
	if direction == 0:
		animated_sprite.play("idle")
	elif direction == 1:
		animated_sprite.play("walk_right")	
	elif direction == -1:
		animated_sprite.play("walk_left")	
