var ActiveObject = Base.extend( {

	constructor: function()
	{
		this.vy = 1;
		this.vx = 0;
		this.gravity = 20;
		this.weight = 0.9;
		this.bounce_factor = 0.3;
		this.vx_dmg = 0;
	},
	set_texture: function( path )
	{
		this.texture = PIXI.Texture.fromImage( path );
		this.sprite = new PIXI.Sprite( this.texture );
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 1;
	},
	set_position: function( x, y )
	{
		if( this.sprite )
		{
			this.sprite.position.x = x;
			this.sprite.position.y = y;
		}
	},
	get_position: function()
	{
		return this.sprite.position;
	},
	get_rect_bounds: function()
	{
		return new PIXI.Rectangle( this.sprite.position.x, this.sprite.position.y, this.sprite.width, this.sprite.height );
	},
	set_rotation: function( angle )
	{
		this.sprite.rotation = angle;
	},
	update: function()
	{
		this.move();
	},
	draw: function( stage )
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
		this.sprite.position.x += this.vx + this.vx_dmg;
	}
	
} );