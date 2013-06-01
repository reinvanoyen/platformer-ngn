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
		if( this.level_stage )
		{
			this.level_stage.position.x = -( Game.world.camera.center.x - Game.width/2 );
			this.level_stage.position.y = -( Game.world.camera.center.y - Game.height/2 );
		}
	},
	draw: function()
	{
		this.level_stage = new PIXI.DisplayObjectContainer;
		this.level_stage.position.x = 0;
		this.level_stage.position.y = 0;
		
		console.log( 'lolo' );
		
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
					point.draw( this.level_stage );
					var point = new PointSprite( bx, by );
					point.draw( this.level_stage );
				}
			}
		}
		
		// Add the level to the main stage
		Game.stage.addChild( this.level_stage );
	}
	
} );