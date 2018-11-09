var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity:{y:300},
             // debug:false,
            setBounds: {
                x: 0,
                y: 0,
                width: 1280,
                height: 839,
              }
            }
    },
    scene: [StartScreen, LevelOne]
};
var game = new Phaser.Game(config);
