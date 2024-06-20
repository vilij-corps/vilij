class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('star', 'assets/demo/star.png');
    }

    create ()
    {
        this.add.sprite(400, 300, 'star');

        this.input.once('pointerdown', function ()
        {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);

        DM.query_dialogue_db("accomodation-common-75");
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('star', 'assets/demo/star.png');
    }

    create ()
    {
        this.add.sprite(500, 300, 'star');

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    preload ()
    {
        this.load.image('star', 'assets/demo/star.png');
    }

    create ()
    {
        this.add.sprite(600, 300, 'star');

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneC to SceneA');

            this.scene.start('main-menu');

        }, this);
    }
}

// var scenes = [ SceneA, SceneB, SceneC ]