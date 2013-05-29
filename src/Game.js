var Game = {
	
	settings:
	{
		fps: 60
	},
	create: function()
	{
		this.stage = new PIXI.Stage( 0x66FF99 );
		this.renderer = PIXI.autoDetectRenderer( 800, 600 );
		
		this.active_objects = new ActiveObjectStorage;
		this.input_manager = new InputManager;
		
		document.body.appendChild( this.renderer.view );
		
		this.active_objects.add( 'player', new Player( 200, 20 ) );
		this.active_objects.get( 'player' ).draw_to_stage( this.stage );
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
		this.active_objects.update_all();
	},
	draw: function()
	{
		this.renderer.render( this.stage );
	}
	
};