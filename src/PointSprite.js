var PointSprite = ActiveObject.extend( {

	constructor: function( x, y )
	{
		this.base();
		
		var texture = PIXI.Texture.fromImage( "sprites/point.png" );
		
		this.set_texture( texture );
		this.set_position( x, y );
		this.draw( Game.stage );
	},
	update: function()
	{
	}
	
} );