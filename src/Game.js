var Game = {
	
	settings:
	{
		fps: 60
	},
	create: function()
	{
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.stage = new PIXI.Stage( 0x2a353c );
		this.renderer = PIXI.autoDetectRenderer( this.width, this.height );
		
		this.input_manager = new InputManager;
		this.hud = new Hud;
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
		this.hud.update();
		this.world.update();
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	}
	
};