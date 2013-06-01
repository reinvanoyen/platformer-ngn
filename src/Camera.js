var Camera = Base.extend( {

	center: { x: 0, y: 0 } ,
	follow: function( active_object )
	{
		this.center.x = active_object.sprite.position.x;
		this.center.y = active_object.sprite.position.y;
	}

} );