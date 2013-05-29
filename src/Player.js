var Player = ActiveObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		this.set_texture( "sprites/bunny.png" );
		this.set_position( x, y );
	},
	update: function()
	{
		if( Game.input_manager.is_key_down( 37 ) )
		{
			this.vy = 0;
		}
		this.move();
	}
	
} );