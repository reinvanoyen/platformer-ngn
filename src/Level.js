var Level = Base.extend( {
	
	level_data: {},
	load: function( level_data )
	{
		this.level_data = level_data;
		this.is_loaded = true;
	},
	update: function()
	{
		// Nothing to see here, for now levels are non-dynamic
	},
	draw: function()
	{
		if( this.is_loaded )
		{
			for( i = 0; i < this.level_data.coordinates.length; i++ )
			{
				point = new PointSprite( this.level_data.coordinates[ i ].x, this.level_data.coordinates[ i ].y );
			}
		}
	}
	
} );