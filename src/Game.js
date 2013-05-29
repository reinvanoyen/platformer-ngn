var Game = Base.extend( {
	
	settings:
	{
		fps: 60
	},
	constructor: function()
	{
		this.stage = new PIXI.Stage( 0x66FF99 );
		this.renderer = PIXI.autoDetectRenderer( 800, 600 );
		
		this.active_objects = new ActiveObjectStorage;
		
		document.body.appendChild( this.renderer.view );
		
		this.active_objects.add( 'player', new Player );
		this.active_objects.get( 'player' ).draw_to_stage( this.stage );
		this.active_objects.get( 'player' ).vy = 2;
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
	
} );