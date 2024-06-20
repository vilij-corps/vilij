class ColorsScene extends Scene {
    constructor() {
      super('colors-scene');
    }
  
    preload() {
      // preload assets
    }
  
    create() {
      // render scene
      this.cameras.main.setBackgroundColor(0x2299CC);
    }
}