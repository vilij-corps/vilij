class TemplateScene extends Scene {
    constructor() {
      super('template-scene');
    }
  
    preload() {
      // preload assets
    }
  
    create() {
      // render scene
      this.cameras.main.setBackgroundColor(0x2299CC);
    }
}
