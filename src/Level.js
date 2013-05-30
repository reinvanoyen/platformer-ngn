var Level = Base.extend( {
	
	level_data: {},
	load: function( level, callback )
	{
		var that = this;
		
		$.ajax( {
			url: 'levels/' + level + '.lvl',
			dataType: 'json',
			success: function( data )
			{
				that.level_data = data;
				that.is_loaded = true;
				callback();
			}
		} );
		
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