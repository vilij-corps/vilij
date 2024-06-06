const scene_key = 'my_scene'
const asset_keys = {
    BACKGROUND: 'BACKGROUND',
    MIDDLEGROUND: 'MIDDLEGROUND',
    FOREGROUND: 'FOREGROUND',
    TREES: 'TREES',
  };

const bg = Phaser.GameObjects.TileSprite;
const mg = Phaser.GameObjects.TileSprite;
const fg = Phaser.GameObjects.TileSprite;
const trees = Phaser.GameObjects.TileSprite;

class Game extends Phaser.Scene {
  
    constructor() {
      super({ key: scene_key });
    }
  
    preload() {
      this.load.image(asset_keys.BACKGROUND, 'assets/images/background.png');
      this.load.image(asset_keys.MIDDLEGROUND, 'assets/images/fog.png');
      this.load.image(asset_keys.FOREGROUND, 'assets/images/foreground.png');
      this.load.image(asset_keys.TREES, 'assets/images/trees.png');
    }
  
    create() {
      const { height, width } = this.scale;
  
      this.bg = this.add.tileSprite(0, 0, width, height, asset_keys.BACKGROUND).setScale(2);
      this.trees = this.add.tileSprite(0, 0, width, height, asset_keys.TREES).setScale(2);
      this.fg = this.add.tileSprite(0, 0, width, height, asset_keys.FOREGROUND).setScale(2);
      this.mg = this.add.tileSprite(0, 0, width, height, asset_keys.FOG).setScale(2);
    }
  
    // this is the key to parallax background effect
    // the farther the option, the slower the position advances
    // called as player moves
    update() {
      this.bg.tilePositionX += 0.1;
      this.trees.tilePositionX += 0.14;
      this.fg.tilePositionX += 0.2;
      this.mg.tilePositionX += 0.7;
    }
  
}