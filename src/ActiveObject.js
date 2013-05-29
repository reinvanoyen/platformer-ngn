var ActiveObject = Base.extend( {

	constructor: function()
	{
		this.vy = 1;
		this.vx = 0;
		this.gravity = 20;
		this.weight = 0.3;
		
		this.texture = PIXI.Texture.fromImage( "sprites/bunny.png" );
		this.sprite = new PIXI.Sprite( this.texture );
	},
	update: function()
	{
		// Put gravity into effect
		if( this.vy < this.gravity )
		{
			this.vy += this.weight;
		}
		
		this.sprite.position.y += this.vy;
	},
	draw_to_stage: function( stage )
	{
		stage.addChild( this.sprite );
	}
} );