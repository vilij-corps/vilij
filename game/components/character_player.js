/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/


class Player {
    constructor() {

    }
}

class Player {
    constructor(scene, x, y, name, particleManager) {
      this.circle = scene.add.circle(x, y, RADIUS, FILL_COLOR).setDepth(1);
      this.label = scene.add.text(x, y, name).setDepth(2);
      this.emitter = particleManager.createEmitter().startFollow(this.circle);
    }
  
    // update() should be called manually somehow
    update() {
      this.label.setPosition(this.circle.x, this.circle.y);
    }
  }
  
  function create() {
    const player1 = new Player(this, 0, 0, 'Player 1', particleManager);
  }

  class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {

        super(scene, x, y);

        this.scene = scene;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Add sprite with physics
        this.setTexture('player');
        // colide sprite with world bounds
        this.setCollideWorldBounds(true);
        // scale the sprite
        this.setScale(0.4, 0.4);
        // add bounce to the sprite
        this.body.setBounce(0.8);


    }

    update() {
        const scene = this.scene;
        const sprite = this;

        // keyboard controls
        // Up
        if (scene.cursors.up.isDown) {
            sprite.setVelocityY(-250);
        }
        // Down
        else if (scene.cursors.down.isDown) {
            sprite.setVelocityY(250);
        }
        else {
            sprite.setVelocityY(0);
        }
        // Left
        if (scene.cursors.left.isDown) {
            sprite.setVelocityX(-250);
            sprite.flipX = true;
        }
        // Right
        else if (scene.cursors.right.isDown) {
            sprite.setVelocityX(250);
            sprite.flipX = false;
        }
        // else no key press
        else {
            sprite.setVelocityX(0);

        }

    }
  }

/*
  Usage:
  create(): void {
    this.player = new Player(this, 100, 100);
  }
  update(): void {
    this.player.update();
  }
*/