var game = new Phaser.Game(1800, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
	console.log('Game: preload'); //print state to console
	//load assets
	game.load.image('sky', 'assets/sky.png');
	game.load.spritesheet('ship', 'assets/notapenis.png', 32, 32, 4);
}

//define variables
var player;

function create() {
	console.log('Game: create'); //print state to console
	
	var sky = game.add.sprite(0, 0, 'sky');
	sky.scale.setTo(3, 2);
	
	for (var i = 0; i < 50; i++){
		player = new Armada(game, 'ship', 0);
		game.add.existing(player);
	}
}
	
function update() {
	
}
