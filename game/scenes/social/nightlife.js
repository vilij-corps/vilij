class NightlifeScene extends Scene {
    constructor() {
      super('nightlife-scene');
    }
  
    preload() {
      // preload assets
    }
  
    create() {
      // render scene
      this.cameras.main.setBackgroundColor(0x2299CC);
    }
  }