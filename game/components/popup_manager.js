/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/


class PopupManager {
    constructor() {

    }

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.add.sprite(300, 200, 'eye').setInteractive();
        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();
        this.add.sprite(500, 400, 'eye').setInteractive();

        //  Events

        this.input.on('pointerover', (event, gameObjects) =>
        {

            gameObjects[0].setTint(0xff0000);

        });

        this.input.on('pointerout', (event, gameObjects) =>
        {

            gameObjects[0].clearTint();

        });


        sprite.on('pointerdown', function (pointer)
        {

            this.setTint(0xff0000);

        });

        sprite.on('pointerup', function (pointer)
        {

            this.clearTint();

        });
    }
}