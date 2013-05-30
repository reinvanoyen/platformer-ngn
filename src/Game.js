var Game = {
	
	settings:
	{
		fps: 60
	},
	create: function()
	{
		this.stage = new PIXI.Stage( 0x66FF99 );
		this.renderer = PIXI.autoDetectRenderer( 800, 600 );
		
		this.input_manager = new InputManager;
		this.world = new World;
		
		document.body.appendChild( this.renderer.view );
	},
	start: function()
	{
		var that = this;
		this.loopInterval = setInterval( function()
		{
			that.update();
			that.draw();
		}, 1000 / this.settings.fps );
	},
	stop: function()
	{
		clearInterval( this.loopInterval );
	},
	update: function()
	{
		this.world.update();
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	}
	
};