class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'StartScreen'
    });
  }
  preload() {
       console.log("Start screen");
     this.load.image('screen','assets/saver7.png');


  }
  create() {
    this.add.image(400, 300, 'screen');

    var testText = this.add.text(100,100,'Click to start the game.',{
      fontSize: '32px',
      fill: '#FFF'
    });



     testText.setInteractive()
     testText.on('pointerdown',startGameplay)


  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('StartScreen');
    game.scene.start('LevelOne');
}
