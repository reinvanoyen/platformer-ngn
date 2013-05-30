var PointSprite = ActiveObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		this.set_texture( "sprites/point.png" );
		this.set_position( x, y );
		this.draw( Game.stage );
	},
	update: function()
	{
	}
	
} );