//We create our only state
var mainState = {

	//Here we add all the functions we need for our state
	//For this project we have three functions


	preload: function() {
		//Load the image
		game.load.image('logo', 'logo.png');

	},

	create: function() {
		//Display Image on screen
		this.sprite = game.add.sprite(200, 150, 'logo');
	},

	update: function() {
		//Increment the angle of the sprite by 1, 60 times per second
		this.sprite.angle += 1;
	}
};

//We initalize Phaser
var game = new Phaser.Game(400, 300, Phaser.AUTO, 'gameDiv');

//And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.add('main');