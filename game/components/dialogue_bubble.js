/*
 +-+-+ +-+-+ +-+-+-+
	vilij corps
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

class DialogueBubble {

    constructor(dialogue) {
      
		this.dialogue = dialogue;

		// Global variable
		this.learning_label, english_label, voiceover, exit_timer;

		this.dialogue_script = null

		this.player_position = null
		this.npc_position = null

		this.learning_text = ""
		this.english_text = ""
		this.voiceover_file = ""

		// for position placement
		this.character_speaking = ""

		this.player_position = Player.get_position()

    }

	preload() {
		// load button assets
		this.load.image('go_back', 'assets/ui/dialogue/back.png');
    	this.load.image('go_forward', 'assets/ui/dialogue/forward.png');
    	this.load.image('play_voice', 'assets/ui/dialogue/play.png');
		// load audio assets
	}

    create() {

		this.draw_speech_bubble(20, 20, 320, 160, '“Twin ceramic rotor drives on each wheel! And these look like computer controlled anti-lock brakes! Wow, 200 horses at 12,000 rpm!”');

        this.draw_speech_bubble(370, 120, 400, 180, '“Kaneda, you\'ve always been a pain in the ass, you know. You\'ve been telling me what to do since we were kids. You always treat me like a kid. You always show up and start bossing me around, and don\'t you deny it!”');

        this.draw_speech_bubble(70, 400, 250, 100, '“And now you\'re a boss, too... of this pile of rubble.”');

		this.character_speaking = dialogue_script[DialogueManager.dialogue_state]["character"]
		if (character_speaking == "A") {
			dialogue_position(Vector2(player_bubble_position_x, player_bubble_position_y))
		} else if (character_speaking == "B") {
			dialogue_position(Vector2(player_bubble_position_x+200, player_bubble_position_y))
		}
    }

    update(time, delta) {
      // game loop
    }

	draw_speech_bubble (x, y, width, height, quote)
    {

		const learning_style = {
            fontSize: '32px',
            fontFamily: 'Dosis',
            color: '#ffffff',
			align: 'center',
			wordWrap: { width: 300, useAdvancedWrap: true },
			backgroundColor: '#ff00ff'
        };

		const reference_style = {
            fontSize: '24px',
            fontFamily: 'Dosis',
            color: '#ffffff',
			align: 'center',
			wordWrap: { width: 300, useAdvancedWrap: true },
			backgroundColor: '#ff00ff'
        };

		const learning_config = {
            x: 100,
            y: 150,
            padding: 16,
            text: 'Padding Test',
            style: learning_style
        };

		const reference_config = {
            x: 100,
            y: 150,
            padding: 16,
            text: 'Padding Test',
            style: reference_style
        };

		// this.make.text(learning_config);

        const bubbleWidth = width;
        const bubbleHeight = height;
        const bubblePadding = 10;
        const arrowHeight = bubbleHeight / 4;

        const bubble = this.add.graphics({ x: x, y: y });

        //  Bubble shadow
        bubble.fillStyle(0x222222, 0.5);
        bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

        //  Bubble color
        bubble.fillStyle(0xffffff, 1);

        //  Bubble outline line style
        bubble.lineStyle(4, 0x565656, 1);

        //  Bubble shape and outline
        bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
        bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

        //  Calculate arrow coordinates
        const point1X = Math.floor(bubbleWidth / 7);
        const point1Y = bubbleHeight;
        const point2X = Math.floor((bubbleWidth / 7) * 2);
        const point2Y = bubbleHeight;
        const point3X = Math.floor(bubbleWidth / 7);
        const point3Y = Math.floor(bubbleHeight + arrowHeight);

        //  Bubble arrow shadow
        bubble.lineStyle(4, 0x222222, 0.5);
        bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

        //  Bubble arrow fill
        bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
        bubble.lineStyle(2, 0x565656, 1);
        bubble.lineBetween(point2X, point2Y, point3X, point3Y);
        bubble.lineBetween(point1X, point1Y, point3X, point3Y);

		// learning language
		// this.add.text(100, 200, 'Phaser', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
        const learning_language = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });
		const learning_language_bounds = learning_language.getBounds();
		const reference_language = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });
		const reference_language_bounds = learning_language.getBounds();
        

        learning_language.setPosition(bubble.x + (bubbleWidth / 2) - (learning_language_bounds.width / 2), bubble.y + (bubbleHeight / 2) - (learning_language_bounds.height / 2));
		reference_language.setPosition(bubble.x + (bubbleWidth / 2) - (reference_language_bounds.width / 2), bubble.y + (bubbleHeight / 2) - (reference_language_bounds.height / 2));
    }

	play_dialogue_line() {
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

	_on_play_voice_btn_pressed() {
		voiceover.play()
	}

	_on_play_back_btn_pressed() {
		DialogueManager.dialogue_back()
		if (DialogueManager.dialogue_state == 0) {
			pass
		} else {
			play_dialogue_line()
		}
	}

	_on_play_fwd_btn_pressed() {
		DialogueManager.dialogue_forward()
		if (DialogueManager.dialogue_state >= DialogueManager.dialogue_lines) {
				DialogueManager.dialogue_lines = 0
				end_dialogue()
				return
		} else {
			play_dialogue_line()
		}
	}

	dialogue_position(pos) {
		print("changing position")
		self.position = pos
	}
	
	// set visibility to show for
	// character speaking
	dialogue_show() {
		print("showing bubble")
		self.show()
	}
	
	// set visibility to hide for
	// character not speaking
	dialogue_hide() {
		print("hiding bubble")
		self.hide()
	}
	
	// reached last line
	end_dialogue() {
		learning_label.text = "Weeraba"
		english_label.text = "Goodbye"
		exit_timer.start()
		DialogueManager.can_move = true
	}
	
	// removes dialogue after displaying goodbye
	_on_timer_timeout() {
		dialogue_hide()
	}


}
