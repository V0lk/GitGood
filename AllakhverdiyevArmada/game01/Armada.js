function Armada(game, key, frame, scale, rotation) {
	Phaser.Sprite.call(this, game, game.rnd.integerInRange(64, game.width-64), game.rnd.integerInRange(64, game.height-61), key, frame);
	
	this.anchor.setTo(.5,.5);
	this.scale.x = game.rnd.integerInRange(1,5);
	this.scale.y = game.rnd.integerInRange(1,5);
	this.rotation = rotation;
	
	game.physics.enable(this);
	this.body.collideWorldBounds = false;
	this.body.angularVelocity = game.rnd.integerInRange(-180,180);
	this.body.velocity.x = game.rnd.integerInRange(10,500);
}
Armada.prototype = Object.create(Phaser.Sprite.prototype);
Armada.prototype.constructor = Armada;

Armada.prototype.update = function() {
	if(game.input.keyboard.isDown(Phaser.Keyboard.R) && game.input.keyboard.downDuration(Phaser.Keyboard.R, 1)){
		this.body.velocity.x *= -1;
		this.scale.x *= -1;
	}
	
	game.world.wrap(this, 0, true);
}