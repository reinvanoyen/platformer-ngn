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
		if( this.vy === 0 )
		{
			if( Game.input_manager.is_key_down( 32 ) )
			{
				this.vy = -10;
			}
		}
		
		if( Game.input_manager.is_key_down( 37 ) )
		{
			if( this.vy !== 0 )
			{
				this.vx = -3;
			}
			else
			{
				this.vx = -5;
			}
		}
		else if( Game.input_manager.is_key_down( 39 ) )
		{
			if( this.vy !== 0 )
			{
				this.vx = 3;
			}
			else
			{
				this.vx = 5;
			}
		}
		else
		{
			this.vx = 0;
		}
		
		this.move();
	}
	
} );