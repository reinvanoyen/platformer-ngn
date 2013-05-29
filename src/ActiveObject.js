var ActiveObject = Base.extend( {

	constructor: function()
	{
		this.vy = 1;
		this.vx = 0;
		this.gravity = 20;
		this.weight = 0.3;
	},
	set_texture: function( path )
	{
		this.texture = PIXI.Texture.fromImage( path );
		this.sprite = new PIXI.Sprite( this.texture );
	},
	set_position: function( x, y )
	{
		console.log( this.texture );
		if( this.sprite )
		{
			this.sprite.position.x = x;
			this.sprite.position.y = y;
		}
	},
	update: function()
	{
		this.move();
	},
	draw_to_stage: function( stage )
	{
		stage.addChild( this.sprite );
	},
	move: function()
	{
		// Put gravity into effect
		if( this.vy < this.gravity )
		{
			this.vy += this.weight;
		}
		
		this.sprite.position.y += this.vy;
	}
} );