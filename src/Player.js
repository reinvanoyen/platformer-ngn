var Player = ActiveObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		this.set_texture( "sprites/player.png" );
		this.set_position( x, y );
		this.draw( Game.stage );
	},
	update: function()
	{
		this.vx = 0;
		
		if( this.vy === 0 )
		{
			if( Game.input_manager.is_key_down( 32 ) )
			{
				this.vy = -15;
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
				this.vx = -6;
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
				this.vx = 6;
			}
		}
		
		this.move();
	}
	
} );