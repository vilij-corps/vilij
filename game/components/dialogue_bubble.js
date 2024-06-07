/*
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

class DialogueBubble extends Phaser.Scene {
    preload() {
      // preload scene
    }

    create() {
      // create scene
    }

    update(time, delta) {
      // game loop
    }
}

// Global variable
var PLAYER = null

var DialogueManager = null;

var learning_label, english_label, voiceover, exit_timer;

var dialogue_script = null

var player_position = null
var npc_position = null

var learning_text = ""
var english_text = ""
var voiceover_file = ""

// for position placement
var character_speaking = ""
// for position placement of speech bubble
var character_positions = [Vector2(0, 50), Vector2(200, 50)]

function _ready() {
	// set position
	player_position = player.get_position()
}

function init_dialogue() {
	dialogue_script = DialogueManager.current_dialogue
	DialogueManager.can_move = false
}

function play_dialogue_line() {
	// set visibility
	dialogue_hide()
	
	var player_bubble_position_x = player_position.x - ($dialogue_container.get_rect().size.x / 2) - 30
	var player_bubble_position_y = player_position.y - ($dialogue_container.get_rect().size.y) - 275
	print(player_bubble_position_x)
	print(player_bubble_position_y)
	print($dialogue_container.get_rect().size.x)
	character_speaking = dialogue_script[DialogueManager.dialogue_state]["character"]
	if (character_speaking == "A") {
		dialogue_position(Vector2(player_bubble_position_x, player_bubble_position_y))
	} else if (character_speaking == "B") {
		dialogue_position(Vector2(player_bubble_position_x+200, player_bubble_position_y))
	}
	// set labels
	learning_text = dialogue_script[DialogueManager.dialogue_state]["luganda"]
	english_text = dialogue_script[DialogueManager.dialogue_state]["english"]
	voiceover_file = load(dialogue_script[DialogueManager.dialogue_state]["voiceover"])
	
	learning_label.text = learning_text
	english_label.text = english_text
	voiceover.stream = voiceover_file

	dialogue_show()
}

// play voiceover on click
function _on_play_voice_btn_pressed() {
	voiceover.play()
}

// previous line in script
function _on_play_back_btn_pressed() {
	DialogueManager.dialogue_back()
	if (DialogueManager.dialogue_state == 0) {
		pass
	} else {
		play_dialogue_line()
    }
}

// next line in script
function _on_play_fwd_btn_pressed() {
	DialogueManager.dialogue_forward()
	if (DialogueManager.dialogue_state >= DialogueManager.dialogue_lines) {
			DialogueManager.dialogue_lines = 0
			end_dialogue()
			return
    } else {
		play_dialogue_line()
    }
}

// where to place the dialogue bubble
function dialogue_position(pos) {
	print("changing position")
	self.position = pos
}

// set visibility to show for
// character speaking
function dialogue_show() {
	print("showing bubble")
	self.show()
}

// set visibility to hide for
// character not speaking
function dialogue_hide() {
	print("hiding bubble")
	self.hide()
}

// reached last line
function end_dialogue() {
	learning_label.text = "Weeraba"
	english_label.text = "Goodbye"
	exit_timer.start()
	DialogueManager.can_move = true
}

// removes dialogue after displaying goodbye
function _on_timer_timeout() {
	dialogue_hide()
}