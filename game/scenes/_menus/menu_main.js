/*
 +-+-+ +-+-+ +-+-+-+
		vilij
 +-+-+ +-+-+ +-+-+-+
	  CC BY 4.0
 +-+-+ +-+-+ +-+-+-+
*/

class MainMenu extends Phaser.Scene 
{
    constructor() {
      super({ key: 'main-menu' });
    }
  
    preload() {
      this.load.svg('start_icon', 'assets/ui/buttons/start_btn.svg', { width: 48, height: 48 });
      this.load.svg('progress_rpt_icon', 'assets/ui/buttons/progress_report_btn.svg', { width: 48, height: 48 });
      this.load.svg('exit_icon', 'assets/ui/buttons/exit_btn.svg', { width: 48, height: 48 });
    }
  
    create() {

      const offset_x = 48;
      const offset_y = 96;

      // render scene
      this.cameras.main.setBackgroundColor(0xEEEEEE);

      const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
      const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

      // const rect = new Phaser.Geom.Rectangle(screenCenterX, screenCenterY - 24, 300, 48)
      // const graphics = this.add.graphics({ fillStyle: { color: 0xffffff } });
      // graphics.fillRectShape(rect);
      // graphics.strokeRectShape(rect);
      // graphics.lineStyle(2, 0x000000);

      let g = this.add.graphics();
      g.fillStyle(0xffffff, 1.0).fillRect(screenCenterX - (offset_x * 2), screenCenterY - 8, 300, 48);
      g.lineStyle(2, 0x000000).strokeRect(screenCenterX - (offset_x * 2), screenCenterY - 8, 300, 48);

      const start_icon = this.add.sprite(screenCenterX - offset_x, screenCenterY + 16, 'start_icon').setOrigin(0.5).setInteractive();
      const progress_rpt_icon = this.add.sprite(screenCenterX - offset_x, screenCenterY + offset_y + 12, 'progress_rpt_icon').setOrigin(0.5).setInteractive();
      const exit_icon = this.add.sprite(screenCenterX - offset_x, screenCenterY + (offset_y * 2) + 16, 'exit_icon').setOrigin(0.5).setInteractive();

      start_icon.on('pointerdown', function (event)
        {

            console.log('From Main Menu to SceneA');

            this.scene.start('sceneA');

        }, this);

      
      const start_btn = this.add.text(screenCenterX, screenCenterY, 'Start', { fontSize: '28px', fill: '#000' }).setOrigin(0.0).setInteractive();
      const progress_rpt_btn = this.add.text(screenCenterX, screenCenterY + offset_y, 'Progress Report', { fontSize: '28px', fill: '#000' }).setOrigin(0.0).setInteractive();
      const exit_btn = this.add.text(screenCenterX, screenCenterY + (offset_y * 2), 'Exit', { fontSize: '28px', fill: '#000' }).setOrigin(0.0).setInteractive();

      start_btn.on('pointerdown', function (event)
        {

            console.log('From Main Menu to SceneA');

            this.scene.start('sceneA');

        }, this);

     DM = new DialogueManager()
     DM.load_dialogue_db()

    }
}