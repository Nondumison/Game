class LevelOne extends Phaser.Scene {
  constructor() {
    super({
      key: 'LevelOne'
    });
  }



 preload ()


{
    this.load.image('grass', 'assets/grass.png');
    this.load.image('road', 'assets/map.jpg');
    this.load.image('guy', 'assets/walk.png');


    this.load.image('bush', 'assets/bush1.png');
    this.load.image('car', 'assets/cars.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('coin', 'assets/1234.png');

}

 create ()
{
    this.cameras.main.setBounds(0, 0, 1280, 839);
    this.add.image(0, 0, 'grass').setOrigin(0,0);
    // this.add.image(40,35, 'straight');



    road = this.add.image(0, 0, 'road').setOrigin(0,0).setScrollFactor(1);
    // bush = this.physics.add.image(400.5, 301.3, 'bush');
    cursors = this.input.keyboard.createCursorKeys();

    car = this.physics.add.image(300, 80, 'car');

    car.setCollideWorldBounds(1280, 839, true);

    bush = this.physics.add.image(40,35, 'bush');

    bush.body.allowGravity = false;
    this.cameras.main.startFollow(car, true);


    this.cameras.main.setZoom(1);

    player = this.physics.add.sprite(100, 450, 'dude');
     coin=this.physics.add.image(400, 300, 'coin');
     coin=this.physics.add.image(500, 300, 'coin');
     guy=this.physics.add.sprite(700, 300, 'guy');


    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    guy.setBounce(0.2);
    guy.setCollideWorldBounds(true);


      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'turn',
          frames: [ { key: 'dude', frame: 4 } ],
          frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('guy', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'turn',
          frames: [ { key: 'guy', frame: 4 } ],
          frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('guy', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });






          coin = this.physics.add.group({
                  key: 'coin',
                  repeat: 11,
                  setXY: { x: 12, y: 0, stepX: 70 }
              });

              coin.children.iterate(function (child) {
                  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

              });


              this.physics.add.collider(car, bush, hitBomb, null, this);
        this.physics.add.overlap(car, coin, collectCoin, null, this);



          gameText = this.add.text(16, 16, '', { fontSize: '32px', fill: '#000' });
          scoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: "#000"});

          this.physics.add.collider(car, player, hitsprite, null, this);



          gameText = this.add.text(16, 16, '', { fontSize: '32px', fill: '#000' });
          scoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: "#000"});

          this.physics.add.collider(car, guy, hitguy, null, this);
          gameText = this.add.text(16, 16, '', { fontSize: '32px', fill: '#000' });
          scoreText = this.add.text(16, 16, '', { fontSize: '32px', fill: "#000"});



}



 update ()
{
    car.setVelocity(0);
    player.setVelocity(-20);
    guy.setVelocity(20);

    if (cursors.left.isDown)
    {
        car.setAngle(-90).setVelocityX(-200);
        player.setVelocity(15);
         guy.setVelocity(15);


    }
    else if (cursors.right.isDown)
    {
        car.setAngle(90).setVelocityX(200);
          player.setVelocity(15);
          guy.setVelocity(15);
    }

    if (cursors.up.isDown)
    {
      car.setAngle(0).setVelocityY(-200);
      car.body.angle = 90;
        player.setVelocity(15);
        guy.setVelocity(15);

    }
    else if (cursors.down.isDown)
    {
        car.setAngle(-180).setVelocityY(200);
          player.setVelocity(15);
          guy.setVelocity(15);
    }

    if (gameOver) {
      gameText.setText("Game Over! Rerun to play again.");
      scoreText.setText('Score: ' + score);

    return;

    }
}

  }

  var cursors;
  var car;
  var bush;
  var player;
  var coin;
  var guy;
  var road;
  var velocity = 0;
  var score =0;
  var scoreText;
  var gameText;
  var gameOver=false;

  function collectCoin (car, coin)
  {
    coin.disableBody(true, true);

      //  Add and update the score
      score += 10;
      // scoreText.setText('Score: ' + score);

      // if (coin.countActive(true) === 0)
      // {
      //
      //     coin.children.iterate(function (child) {
      //
      //         child.enableBody(true, child.x, 0, true, true);
      //
      //     });
      //   }
  }
function hitBomb (car, bush)
 {
     this.physics.pause();

     bush.setTint(0xff0000);

      gameOver = true;
 }
function hitsprite (car, player)
 {
     this.physics.pause();

     player.setTint(0xff0000);

     gameOver = true;
 }
function hitguy (car, guy)
 {
     this.physics.pause();

     guy.setTint(0xff0000);

     gameOver = true;
 }
