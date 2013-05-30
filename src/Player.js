var Player = ActiveObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		this.set_texture( "sprites/bunny.png" );
		this.set_position( x, y );
		this.draw( Game.stage );
	},
	update: function()
	{
		if( this.sprite.position.y > 300 )
		{
			this.vy = 0;
		}
		
		if( this.vy === 0 )
		{
			if( Game.input_manager.is_key_down( 32 ) )
			{
				this.vy = -5;
			}
		}
		
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.vx = -3;
		}
		else if( Game.input_manager.is_key_down( 39 ) )
		{
			this.vx = 3;
		}
		else
		{
			this.vx = 0;
		}
		
		this.move();
	}
	
} );