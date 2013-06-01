var Level = Base.extend( {
	
	data: {},
	load: function( level, callback )
	{
		var that = this;
		
		$.ajax( {
			url: 'levels/' + level + '.lvl',
			dataType: 'json',
			success: function( data )
			{
				that.data = data;
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
			for( x in this.data.collision_data )
			{
				var x = parseInt( x );
				
				for( y in this.data.collision_data[ x ] )
				{
					var y = parseInt( y );
					
					var line_data = this.data.collision_data[ x ][ y ];
					
					var ax = (x + line_data[0]) * this.data.grid_size;
					var ay = (y + line_data[1]) * this.data.grid_size;
					
					var bx = (x + line_data[2]) * this.data.grid_size;
					var by = (y + line_data[3]) * this.data.grid_size;
					
					var point = new PointSprite( ax, ay );
					var point = new PointSprite( bx, by );
				}
			}
		}
	}
	
} );