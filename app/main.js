//We create our only state
var mainState = {

	//Here we add all the functions we need for our state
	//For this project we have three functions
	

	preload: function() {
		//This function will be exectuted at the beginning
		//That's where we load the game's assets
	},

	create: function() {
		//This function is called after the preload function
		//Here we set up the game, display sprites, etc.
	},

	update: function () {
		//This function is called 60 times per second
		//It contains the games logic
	}
};

//We initalize Phaser
var game = new Phaser.Game(400, 300, Phaser.AUTO, 'gameDiv');

	//And finally we tell Phaser to add and start our 'main' state
	game.state.add('main', mainState);
	game.state.add('main');