
function collect_star (player, star)
    {
        star.disableBody(true, true);
    
        //  Add and update the score
        score += 10;
        scoreText.setText('Score: ' + score);
    
        if (stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 1920) : Phaser.Math.Between(0, 1920);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
        }
    }

class Demo extends Phaser.Scene {

    preload ()
    {
        this.load.image('sky', 'assets/demo/sky.png');
        this.load.image('ground', 'assets/demo/platform.png');
        this.load.image('star', 'assets/demo/star.png');
        this.load.spritesheet('dude', 'assets/demo/dude.png', { frameWidth: 32, frameHeight: 48 });
    
        this.load.spritesheet('kaguta', 'assets/prefabs/characters/kaguta.png', { frameWidth: 512, frameHeight: 512 });

        this.load.image('bomb', 'assets/demo/bomb.png');
    }
    
    create ()
    {
        //  A simple background for our game
        // this.add.image(400, 300, 'sky');
        // this.add.image(800, 300, 'sky');
        // this.add.image(1200, 300, 'sky');
    
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.physics.add.staticGroup();
    
        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        platforms.create(400, 1080, 'ground').setScale(2).refreshBody();
        platforms.create(800, 1080, 'ground').setScale(2).refreshBody();
        platforms.create(1200, 1080, 'ground').setScale(2).refreshBody();
        platforms.create(1600, 1080, 'ground').setScale(2).refreshBody();
    
        // The player and its settings
        player = this.physics.add.sprite(1600, 1080, 'kaguta');
    
        //  Player physics properties. Give the little guy a slight bounce.
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
    
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('kaguta', { start: 0, end: 13 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'kaguta', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('kaguta', { start: 0, end: 13 }),
            frameRate: 10,
            repeat: -1
        });
    
        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
    
        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
    
        stars.children.iterate(function (child) {
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    
    
        //  The score
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
        //  Collide the player and the stars with the platforms
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
    
        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(player, stars, collect_star, null, this);

        const bomb = this.add.sprite(400, 300, 'bomb').setInteractive();

        bomb.on('pointerdown', function (event)
        {

            console.log('From SceneC to SceneA');

            this.scene.start('sceneA');

        }, this);
    }
    
    update ()
    {
        if (gameOver)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
    
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
    
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
    
            player.anims.play('turn');
        }
    
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }

}

var config = {
    type: Phaser.AUTO,
    width: 1920, // 1280; 1920; 3840
    height: 1080, // 720; 1080; 2160
    backgroundColor: '#E1F5FE',
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [ MainMenu, Demo, SceneA, SceneB, SceneC ]
};

game = new Phaser.Game(config);

