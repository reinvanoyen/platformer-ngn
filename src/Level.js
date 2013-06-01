var Level = Base.extend( {
	
	data: {},
	loaded_props: {},
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
		var that = this;
		
		this.level_stage = new PIXI.DisplayObjectContainer;
		this.level_stage.position.x = 0;
		this.level_stage.position.y = 0;
		
		if( this.is_loaded )
		{
			that.add_collision_points();
			that.add_props();
			Game.stage.addChild( that.level_stage );
		}
	},
	add_props: function()
	{
		Game.world.active_objects.add( 'player', new Player( this.data.spawn.x, this.data.spawn.y ) );
		Game.world.active_objects.get( 'player' ).draw( this.level_stage );
		
		var that = this;
		
		for( key in this.data.props )
		{
			var prop = this.data.props[ key ];
			
			this.get_prop_data( prop.type, function( data )
			{
				var active_object = new ActiveObject;
				active_object.load_template( data );
				active_object.set_position( prop.x, prop.y );
				Game.world.active_objects.add( key, active_object );
				Game.world.active_objects.get( key ).draw( that.level_stage );
			} );
		}
	},
	add_collision_points: function()
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
	},
	get_prop_data: function( type, callback )
	{
		if( this.loaded_props[ type ] )
		{
			callback( this.loaded_props[ type ] );
		}
		else
		{
			var that = this;
			
			$.ajax( {
				url: 'props/' + type + '.prop',
				dataType: 'json',
				async: false,
				success: function( data )
				{
					that.loaded_props[ type ] = data;
					callback( that.loaded_props[ type ] );
				}
			} );
		}
	}
	
} );